import React from 'react';
import { makeStyles, Paper, Avatar, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pt: {
    padding: '5px 15px',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  atag: {
    textDecoration: 'none',
  },
}));

export default function PostCard({ data }) {
  const classes = useStyles();

  return (
    <a href={data.skylink} className={classes.atag} target='_blank' rel='noopener noreferrer'>
      <Paper elevation={3}>
        <Grid container>
          <Grid item xs={1} className={classes.center}>
            <Avatar>{data.name[0]}</Avatar>
          </Grid>
          <Grid item xs={11}>
            <h1 className={classes.pt}>{data.name}</h1>
          </Grid>
        </Grid>
      </Paper>
    </a>
  );
}
