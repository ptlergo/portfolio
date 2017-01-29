const express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  app = express(),
  port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
