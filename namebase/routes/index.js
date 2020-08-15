const { api } = require('../helper');
const router = require('express').Router();
require('dotenv').config();

router.get('/connecting', async (req, res) => {
  try {
    const response = await api('GET', `/api/v0/dns/domains/${process.env.DOMAIN}`, null);
    res.status(200).json({
      response
    });
  } catch (error) {
    res.status(400).json({
      err
    });
  }
});

router.post('/upload', async (req, res) => {
  try {
    const skylink = req.body.skylink;
    var body = `{"records": [{ "type": "TXT", "host": "", "value":"${skylink}","ttl": 0 }] }`;
    const response = await api('PUT', `/api/v0/dns/domains/${process.env.DOMAIN}`, body);
    res.status(200).json({
      response
    });
  } catch (error) {
    res.status(400).json({
      response
    });
  }
});

module.exports = router;
