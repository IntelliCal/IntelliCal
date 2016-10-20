var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 1337;

app.set('views', __dirname + '/fronend/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/frontend/views'));
app.use(bodyParser.json())


app.listen(port, function(){
  console.log('Hermes is listening on port: ', port);
})