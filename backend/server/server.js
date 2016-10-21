var express = require('express');
var app = express();

var morgan = require('morgan');
var path = require ('path');
var bodyParser = require('body-parser');


var port = process.env.PORT || 1337;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/test', express.static(path.join(__dirname + '/../public')));
app.use('/test/node_modules', express.static(path.join(__dirname + '/../node_modules')));

app.get('/', function(req, res, next) {
  res.send('Hello Everyone');
});



app.listen(port, function(){
  console.log('Hermes is listening on port: ', port);
})