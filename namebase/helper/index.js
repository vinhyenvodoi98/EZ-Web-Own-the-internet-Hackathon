const fetch = require('node-fetch');
require('dotenv').config();

module.exports = {
  api: function (method, endpoint, body) {
    const credentials = Buffer.from(`${process.env.ACCESS_KEY}:${process.env.SECRET_KEY}`);
    const encodedCredentials = credentials.toString('base64');
    const authorization = `Basic ${encodedCredentials}`;

    const options = {
      method,
      body,
      headers: {
        Authorization: authorization,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };
    const url = `https://namebase.io${endpoint}`;
    return fetch(url, options)
      .then((res) => res.json())
      .catch((err) => err);
  }
};
