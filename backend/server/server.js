var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 1337;

// app.set('views', __dirname + '/fronend/views');
// app.use(express.static(__dirname + '/frontend/views'));
// app.use(bodyParser.json())

app.get('/', function(req, res, next) {
  res.send('Hello World!');
});

app.listen(port, function(){
  console.log('Hermes is listening on port: ', port);
})