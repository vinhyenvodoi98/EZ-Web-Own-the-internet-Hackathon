import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { makeStyles, Paper, InputBase, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axiosClient from 'api/axiosClient';
import PostCard from 'components/PostCard';

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
  },
  mgb: {
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
  const [blogUrl, setBlogUrl] = useState('');
  const [input] = useState(
    '# What will you read today ? \n\nWant to know the mysteries surrounding the Mona Lisa painting?'
  );
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataUrl = 'https://siasky.net/hns/eatingonadime';
      try {
        const response = await axiosClient.get(dataUrl);
        setDatas(response);
      } catch (error) {
        // If no you have recorded
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className={classes.root}>
      <Paper className={`${classes.bt} ${classes.mgb}`} elevation={3}>
        <InputBase
          className={classes.input}
          placeholder='Wanna read about Skynet or Handshake ? Please search Skynet Handshake'
          inputProps={{ 'aria-label': 'search blog url' }}
          value={blogUrl}
          onChange={(event) => setBlogUrl(event.target.value)}
        />
        <IconButton className={classes.iconButton} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>

      <Paper elevation={3} className={classes.mgb}>
        <div className={classes.pt}>
          <ReactMarkdown source={input} />
        </div>
      </Paper>

      <Grid container spacing={3}>
        {datas.map((data, index) => (
          <Grid key={index} item xs={12}>
            <PostCard data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
