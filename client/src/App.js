import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import Post from 'views/Post';
import View from 'views/View';

import 'easymde/dist/easymde.min.css';
import './App.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '100vh',
    position: 'relative',
  },
  ch: {
    height: '100%',
  },
  header: {
    position: 'absolute',
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.paper}>
        <div className={classes.header}>
          <Header />
        </div>
        <Container className={classes.ch}>
          <Switch>
            <Route exact path='/' component={Post} />
            <Route exact path='/view' component={View} />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
