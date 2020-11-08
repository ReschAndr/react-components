import React from 'react';
import {
  AppBar,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
} from '@material-ui/core';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { FormattedMessage } from 'react-intl';
import { useUIState } from '../../../../contexts/UIState';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: 'none',
  },
  iconButton: {
    color: '#ffffff',
    marginRight: theme.spacing(1),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

interface ITopbarProps {
  showMenuIcon: boolean;
  onOpen: () => void;
}

const Header: React.FC<ITopbarProps> = (props) => {
  const { onOpen, showMenuIcon } = props;

  const classes = useStyles();

  const theme = useTheme();
  const { darkMode, setDarkMode } = useUIState();

  return (
    <AppBar
      color={theme.palette.type === 'dark' ? 'default' : 'primary'}
      className={classes.root}
    >
      <Toolbar className={classes.toolbar}>
        {showMenuIcon && (
          <IconButton className={classes.iconButton} onClick={() => onOpen()}>
            <MenuOpenIcon />
          </IconButton>
        )}
        <Typography variant="h6">
          <FormattedMessage
            id="header.title"
            defaultMessage="Typescript Material UI"
          />
        </Typography>
        <IconButton
          className={classes.iconButton}
          onClick={() => setDarkMode(!darkMode)}
        >
          {(darkMode && <Brightness7Icon />) || <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
