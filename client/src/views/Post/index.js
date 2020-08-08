import React, { useState } from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import SimpleMDE from 'react-simplemde-editor';

const useStyles = makeStyles(() => ({
  center: {
    display: 'flex',
    alignItems: 'center',
  },
  pt: {
    padding: '5px 15px',
  },
  ch: {
    height: '100%',
  },
  sc: {
    overflow: 'auto',
  },
}));

export default function Post() {
  const classes = useStyles();
  const [handleChange, setHandleChange] = useState('');

  return (
    <div className={`${classes.center} ${classes.ch}`}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={`${classes.ch} ${classes.sc}`} elevation={3}>
            <SimpleMDE onChange={setHandleChange} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={`${classes.ch} ${classes.sc}`} elevation={3}>
            <div className={classes.pt}>
              <ReactMarkdown source={handleChange} />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
