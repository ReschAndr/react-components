import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const NotFoundPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormattedMessage
        id="notFound"
        description="page not found"
        defaultMessage="not found"
      />
    </div>
  );
};

export default NotFoundPage;
