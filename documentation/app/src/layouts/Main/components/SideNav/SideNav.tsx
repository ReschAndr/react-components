import React from 'react';
import {
  Drawer,
  makeStyles,
  Theme,
  List,
  Divider,
  Avatar,
  Typography,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import { FormattedMessage } from 'react-intl';
import { ListItemLink } from './components';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: 244,
    padding: 10,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    height: '100%',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
  typography: {
    marginTop: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(1),
  },
  avatar: {
    width: 60,
    height: 60,
  },
}));

interface ISideNavProps {
  open: boolean;
  onClose: () => void;
  variant: 'permanent' | 'persistent' | 'temporary';
}

const SideNav: React.FC<ISideNavProps> = (props) => {
  const { open, onClose, variant } = props;

  const classes = useStyles();

  const listItems = [
    {
      primaryText: 'Home',
      routerPath: '/home',
      icon: <HomeIcon />,
    },
    {
      primaryText: 'Something else',
      routerPath: '/something',
      icon: <MailIcon />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div className={classes.root}>
        <div className={classes.profile}>
          <Avatar alt="User" className={classes.avatar} />
          <Typography className={classes.typography} variant="subtitle2">
            <FormattedMessage
              id="sideNav.maxMustermann"
              defaultMessage="Max Mustermann"
            />
          </Typography>
          <Typography variant="body2">
            <FormattedMessage
              id="sideNav.fullStackDev"
              defaultMessage="Fullstack Magician"
            />
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <List>
          {listItems.map(({ primaryText, routerPath, icon }) => (
            <ListItemLink
              primary={primaryText}
              key={primaryText}
              to={routerPath}
              onClick={onClose}
              icon={icon}
            />
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default SideNav;
