var express = require('express');
var app = express();
var db = require('./db.js');



var mycontroller1 = require('./mycontroller1.js')

app.use('/controller1', mycontroller1);




module.exports = app;
