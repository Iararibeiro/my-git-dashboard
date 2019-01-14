const express = require('express');
const request = require('request');
let port = 5000;

var app = express();
var mainRoute = require('./routes/index');

app.use('/',mainRoute);

app.listen(port, (err, res) => {
  if (err) {
    return console.log('something wrong happen');
  }
  console.log(`server is listening on ${port}`);
})
