import * as React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import {
  createMuiTheme,
  MuiThemeProvider,
  Theme as MuiTheme,
} from '@material-ui/core';
import { MemoryRouter } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { MemoryRouterProps } from 'react-router';
import { IntlProvider } from 'react-intl';

const defaultTheme = createMuiTheme();

interface ICustomRenderOptions extends Omit<RenderOptions, 'queries'> {
  theme?: MuiTheme;
  local?: string;
  routerOptions?: MemoryRouterProps;
}

function render(
  ui: React.ReactElement,
  { theme, local, routerOptions, ...options }: ICustomRenderOptions = {}
) {
  const Wrapper: React.FC<{}> = ({ children }) => (
    <IntlProvider defaultLocale="en" locale={local || 'en'} messages={{}}>
      <MuiThemeProvider theme={theme || defaultTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <MemoryRouter {...routerOptions}>{children}</MemoryRouter>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </IntlProvider>
  );

  return rtlRender(ui, {
    wrapper: Wrapper,
    ...options,
  });
}

// interface ICustomRenderOptionsWithQuery<Q extends Queries>
//   extends RenderOptions<Q> {
//   theme?: MuiTheme;
// }

// export function render<Q extends Queries>(
//   ui: React.ReactElement,
//   { theme, ...options }: ICustomRenderOptionsWithQuery<Q>
// ) {
//   return rtlRender<Q>(ui, {
//     wrapper: (children) => Wrapper({ children, theme }),
//     ...options,
//   });
// }

export * from '@testing-library/react';

// override React Testing Library's render with our own
export { render };
