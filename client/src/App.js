import React, { useState } from 'react';
import { makeStyles, Grid, Paper, Container } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import SimpleMDE from 'react-simplemde-editor';

import 'easymde/dist/easymde.min.css';
import './App.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '100vh',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
  },
  ch: {
    height: '100%',
  },
  pt: {
    padding: '5px 15px',
  },
  sc: {
    overflow: 'auto',
  },
}));

function App() {
  const classes = useStyles();
  const [handleChange, setHandleChange] = useState('');

  return (
    <Container className={classes.paper}>
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
    </Container>
  );
}

export default App;
