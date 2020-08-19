import React from 'react';
import { makeStyles, AppBar, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: '40px',
  },
  bl: {
    width: '120px',
    borderRadius: '0px',
  },
  rmd: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color='transparent' position='static'>
        <Toolbar>
          <img className={classes.logo} src="https://i.imgur.com/uk28IEx.png" alt='logo' />

          <Link to='/' className={classes.rmd}>
            <Button className={classes.bl} color='inherit'>
              <h3>Post</h3>
            </Button>
          </Link>
          <Link to='/view' className={classes.rmd}>
            <Button className={classes.bl} color='inherit'>
              <h3>TownSquare</h3>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
