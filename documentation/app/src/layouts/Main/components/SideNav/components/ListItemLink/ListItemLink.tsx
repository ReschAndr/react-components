import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  listItem: {
    padding: '5px 10px 5px 10px',
  },
  listItemText: {
    fontWeight: '500' as any,
    color: theme.palette.text.secondary,
  },
  icon: {
    minWidth: '34px',
    color: theme.palette.text.secondary,
  },
}));

interface IListItemLinkProps {
  primary: React.ReactNode;
  to: string;
  icon: any;
  onClick?: () => void;
}

const ListItemLink: React.FC<IListItemLinkProps> = (props) => {
  const { icon, primary, to, onClick } = props;

  const classes = useStyles();

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref as any} to={to} {...linkProps} />
      )),
    [to]
  );

  return (
    <ListItem
      className={classes.listItem}
      button
      component={CustomLink as any}
      onClick={onClick}
    >
      <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
      <ListItemText
        classes={{ primary: classes.listItemText }}
        primary={primary}
      />
    </ListItem>
  );
};

export default ListItemLink;
