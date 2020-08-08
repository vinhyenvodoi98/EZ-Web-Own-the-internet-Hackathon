import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { makeStyles, Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '15vh',
    flexGrow: 1,
  },
  pt: {
    padding: '5px 15px',
  },

  bt: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '99%',
    marginBottom: '30px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function View() {
  const classes = useStyles();
  const input = '# This is a header\n\nAnd this is a paragraph';
  const [blogUrl, setBlogUrl] = useState('');

  const handleSearch = () => {
    console.log(blogUrl);
    setBlogUrl('');
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.bt} elevation={3}>
        <InputBase
          className={classes.input}
          placeholder='Your blog url. Example : https://siasky.net/AAB1OOTWRLeI8hDqd0Hmke6jNRwulY57bQKsCcc_2P6_UQ'
          inputProps={{ 'aria-label': 'search blog url' }}
          value={blogUrl}
          onChange={(event) => setBlogUrl(event.target.value)}
        />
        <IconButton
          onClick={() => handleSearch()}
          className={classes.iconButton}
          aria-label='search'
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      <Paper className={`${classes.ch} ${classes.sc}`} elevation={3}>
        <div className={classes.pt}>
          <ReactMarkdown source={input} />
        </div>
      </Paper>
    </div>
  );
}
