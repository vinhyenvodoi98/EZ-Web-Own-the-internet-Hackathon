import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function View() {
  const classes = useStyles();

  return <div className={classes.root}>hello</div>;
}
