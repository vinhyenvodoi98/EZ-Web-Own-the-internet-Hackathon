import React, { useState } from 'react';
import { makeStyles, Grid, Paper, Button, InputBase } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import SimpleMDE from 'react-simplemde-editor';
import { Remarkable } from 'remarkable';
import axiosClient from 'api/axiosClient';

const useStyles = makeStyles((theme) => ({
  center: {
    paddingTop: '15vh',
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
          '</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"><head><body><div style="margin-top: 30px;" class="container">' +
          md.render(handleChange) +
          '</div><script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script></body></html>',
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

  const generateJson = async () => {
    if (title && url) {
      const dataUrl = 'https://siasky.net/hns/eatingonadime';
      try {
        const response = await axiosClient.get(dataUrl);
        response.unshift({ name: title, skylink: url });
        // push file
        publicJson(response);
      } catch (error) {
        // If no you have recorded
        var record = [{ name: title, skylink: url }];
        //  push file
        publicJson(record);
      }
    } else {
      console.log('please write some thing');
    }
  };

  const publicJson = (record) => {
    const uuid = generateUUID();
    fetch(`https://siasky.net/skynet/skyfile/${uuid}?filename=index.json`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(record),
    })
      .then((response) => response.json())
      .then(async (result) => {
        try {
          const response = await axiosClient.post(
            `${process.env.REACT_APP_SERVER_BASEURL}/upload`,
            {
              skylink: result.skylink,
            }
          );
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      })
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
        <Grid item xs={3}>
          <Button variant='outlined' color='primary' onClick={() => generateHTML()}>
            Generate Skynet Link
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant='outlined' style={{ color: 'black' }} onClick={() => generateJson()}>
            Public to TownSquare
          </Button>
        </Grid>

        <Grid item xs={12}>
          {url ? (
            <a
              href={`https://siasky.net/${url}`}
              target='_blank'
              rel='noopener noreferrer'
            >{`https://siasky.net/${url}`}</a>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
