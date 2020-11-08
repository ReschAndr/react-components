import { createMuiTheme } from '@material-ui/core';

import palette from './palette';

function createAppTheme(type?: 'dark') {
  palette.type = type;

  const theme = createMuiTheme({
    palette,
  });

  return theme;
}

export default createAppTheme;
