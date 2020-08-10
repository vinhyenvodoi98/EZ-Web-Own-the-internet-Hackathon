import React, { useState } from 'react';
import { makeStyles, Grid, Paper, Button, InputBase } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import SimpleMDE from 'react-simplemde-editor';
import { Remarkable } from 'remarkable';

const useStyles = makeStyles((theme) => ({
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
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  bt: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '45px',
  },
}));

export default function Post() {
  const classes = useStyles();
  const [handleChange, setHandleChange] = useState('');
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const generateUUID = () => {
    let uuid = '';
    const cs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 16; i++) {
      uuid += cs.charAt(Math.floor(Math.random() * cs.length));
    }
    return uuid;
  };

  const generateHTML = () => {
    var md = new Remarkable();
    var blob = new Blob(
      [
        '<html><head><title>' +
          title +
          '</title><head><body><pre>' +
          md.render(handleChange) +
          '</pre></body></html>',
      ],
      { type: 'text/html' }
    );
    var formData = new FormData();
    formData.append('file', blob);

    const uuid = generateUUID();
    fetch(`https://siasky.net/skynet/skyfile/${uuid}?filename=index.html`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => setUrl(result.skylink))
      .catch((e) => console.log(e));
  };

  return (
    <div className={`${classes.center} ${classes.ch}`}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.bt} elevation={3}>
            <InputBase
              className={classes.input}
              placeholder='Your Title :'
              inputProps={{ 'aria-label': 'title' }}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={`${classes.ch} ${classes.sc}`} elevation={3}>
            <SimpleMDE onChange={setHandleChange} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={`${classes.ch} ${classes.sc}`} elevation={3}>
            <div className={classes.pt}>
              <ReactMarkdown source={handleChange} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Button variant='outlined' color='primary' onClick={() => generateHTML()}>
            Generate Skynet Link
          </Button>
        </Grid>
        <Grid item xs={12}>
          {url ? <a href={`https://siasky.net/${url}`}>{`https://siasky.net/${url}`}</a> : <></>}
        </Grid>
      </Grid>
    </div>
  );
}
