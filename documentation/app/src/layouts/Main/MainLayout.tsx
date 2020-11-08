import React, { useState } from 'react';
import {
  makeStyles,
  Theme,
  useMediaQuery,
  CssBaseline,
} from '@material-ui/core';
import { Header, SideNav } from './components';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    paddingTop: 54,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64, // Toolbar Height > sm
      height: 'calc(100% - 64px)',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 264,
    },
  },
}));

const MainLayout: React.FC = (props) => {
  const { children } = props;

  const classes = useStyles();

  const matchesLg = useMediaQuery(
    (theme: Theme) => theme.breakpoints.up('lg'),
    {
      defaultMatches: true,
    }
  );

  const [open, setOpen] = useState<boolean>(false);

  const handleSideNavClose = () => {
    setOpen(false);
  };

  const handleSideNavOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header showMenuIcon={!matchesLg} onOpen={handleSideNavOpen} />
      <SideNav
        open={matchesLg || open}
        onClose={handleSideNavClose}
        variant={matchesLg ? 'permanent' : 'temporary'}
      />
      {children}
    </div>
  );
};

export default MainLayout;
