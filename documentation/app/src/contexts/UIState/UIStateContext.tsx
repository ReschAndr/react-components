import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useCookies } from 'react-cookie';

interface ContextProps {
  darkMode: boolean;
  setDarkMode(darkMode: boolean): void;
}
const UIStateContext = React.createContext<ContextProps>({
  darkMode: false,
  setDarkMode: () => {},
});

const paleteTypeCookie = 'material-theme-darkmode';

export const UIStateProvider: React.FC = (props) => {
  const { children } = props;

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [cookies, setCookie] = useCookies();

  const [darkMode, setDarkMode] = React.useState<boolean>(initTheme());

  function initTheme() {
    const cookie = cookies[paleteTypeCookie];
    if (cookie) {
      try {
        const theme = JSON.parse(cookie);
        return theme;
      } catch (_) {
        return prefersDarkMode;
      }
    }
    return prefersDarkMode;
  }

  React.useEffect(() => {
    setCookie(paleteTypeCookie, darkMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode]);

  return (
    <UIStateContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </UIStateContext.Provider>
  );
};

export const useUIState = () => React.useContext(UIStateContext);
