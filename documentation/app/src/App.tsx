import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/styles';
import { IntlProvider } from 'react-intl';
import moment from 'moment';
import { BrowserRouter as Router } from 'react-router-dom';
import createAppTheme from './theme';
import {
  withCustomStateProviders,
  useLanguageState,
  useUIState,
} from './contexts';
import { translations } from './translations';
import { Routes } from './routes';

const themes = { default: createAppTheme(), dark: createAppTheme('dark') };

function App() {
  const { darkMode } = useUIState();
  const { currentLanguageKey } = useLanguageState();

  moment.locale(currentLanguageKey);

  return (
    <IntlProvider
      defaultLocale="en"
      locale={currentLanguageKey}
      messages={translations[currentLanguageKey]}
    >
      <ThemeProvider theme={darkMode ? themes.dark : themes.default}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router>
            <Routes />
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default withCustomStateProviders(App);
