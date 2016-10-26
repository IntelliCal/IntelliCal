var express = require('express');
var app = express();

var port = process.env.PORT || 1337;

//router and middleware for rest api
require('./routes.js')(app, express);
require('./middleware.js')(app, express);

app.listen(port, function(){
  console.log('Hermes is listening on port: ', port);
})