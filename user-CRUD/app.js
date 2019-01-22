var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = 3000;
var db = require('./db/index');
var userDetails = require('./routers/user');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/userData',userDetails);
app.listen(port,function(){
    console.log('app listing on port:',port);
}); 
module.exports = app;