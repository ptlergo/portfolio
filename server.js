const express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  morgan = require('morgan'),
  app = express(),
  port = process.env.PORT || 8080;

// Request stream formating
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set headers to be able to conduct karma tests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authrization');
  next();
});

// Logger styling
app.use(morgan('dev'));

// Front end directory path
app.use(express.static(path.join(__dirname, '/client')));

const server = app.listen(port, () => {
  console.log('LISTENING TO PORT: ', port);
});

module.exports = server;
