var PORT = process.env.PORT || 4000;
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');

var app = express();

// handshake login
var route = require('./routes');

// set up cors to allow us to accept requests from our client
app.use(cors());

app.use(
  require('express-session')({
    secret: 'keybroad cat',
    resave: false,
    saveUninitialized: false
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());

// Route
app.use('/', route);

app.listen(PORT, (err) => {
  console.log('Server is running in port 4000 !!!');
});

module.exports = app;
