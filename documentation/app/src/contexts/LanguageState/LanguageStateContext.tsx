import React from 'react';
import { useCookies } from 'react-cookie';

// #region types
export interface SupportedLanguage {
  /**
   * 2-digit language code
   */
  langKey: string;
  /**
   * native display name of the language
   */
  displayName: string;
  /**
   * true if this is the fallback language
   * if true it will be used, if the user has not yet set a preffered language and the language set as navigator.language is not supported
   */
  isFallback?: boolean;
}

export type SupportedLanguageKeys = typeof supportedLanguageKeys[number];

interface ContextProps {
  /**
   * 2-digit language code of the currently selected language
   */
  currentLanguageKey: string;
  /**
   * currently selected language
   */
  currentLanguage: SupportedLanguage;
  /**
   * changes the currently selected language
   * @param newLanguage accepts either a SupportedLanguage or the 2-digit code of the new language
   * if the language can't be found in supportedLanguages the language wont change and a error will be loged in the console
   */
  changeLanguage: (
    newLanguage: SupportedLanguage | SupportedLanguageKeys
  ) => void;
}

// #endregion types

export const supportedLanguages: SupportedLanguage[] = [
  { displayName: 'english', langKey: 'en', isFallback: true },
  { displayName: 'deutsch', langKey: 'de' },
];

export const supportedLanguageKeys = ['en', 'de'] as const;

const LanguageStateContext = React.createContext<ContextProps>({
  currentLanguageKey: navigator.language,
  currentLanguage: { displayName: '', langKey: navigator.language.slice(0, 2) },
  changeLanguage: () => {},
});

const languageKeyCookie = 'preferred-language-key';

export const LanguageStateProvider: React.FC = (props) => {
  const { children } = props;

  const [cookies, setCookie] = useCookies();

  const [currentLanguage, setCurrentLanguage] = React.useState<
    // eslint-disable-next-line @typescript-eslint/indent
    // TODO fix globally
    SupportedLanguage
  >(getInitialLanguage);

  function getInitialLanguage() {
    const cookieLang = cookies[languageKeyCookie];
    if (cookieLang) {
      const lang = supportedLanguages.find((l) => l.langKey === cookieLang);
      if (lang) {
        return lang;
      }
    }

    const navLang = navigator.language.slice(0, 2);
    const supLang = supportedLanguages.find((l) => navLang === l.langKey);
    if (supLang) {
      return supLang;
    }
    const fallbackLang = supportedLanguages.find((l) => l.isFallback);
    if (fallbackLang) {
      return fallbackLang;
    }
    return supportedLanguages[0];
  }

  function changeLanguage(
    newLanguage: SupportedLanguage | SupportedLanguageKeys
  ) {
    if (typeof newLanguage === 'string') {
      const sNewLanguage = supportedLanguages.find(
        (l) => l.langKey === newLanguage
      );
      if (sNewLanguage) {
        setCurrentLanguage(sNewLanguage);
        return;
      }
    } else if (supportedLanguages.includes(newLanguage)) {
      setCurrentLanguage(newLanguage);
      return;
    }
    // eslint-disable-next-line no-console
    console.warn(
      `unable to find a language "${JSON.stringify(
        newLanguage
      )}" in "${JSON.stringify(supportedLanguages)}" ! `
    );
  }

  React.useEffect(() => {
    setCookie(languageKeyCookie, currentLanguage.langKey);
  }, [currentLanguage, setCookie]);

  return (
    <LanguageStateContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        currentLanguageKey: currentLanguage.langKey,
      }}
    >
      {children}
    </LanguageStateContext.Provider>
  );
};

export const useLanguageState = () => React.useContext(LanguageStateContext);
