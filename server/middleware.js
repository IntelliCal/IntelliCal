var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  //serving up our static webpages for react components
  app.use(express.static(path.resolve(__dirname + '/../public')));
  app.use(express.static(path.join(__dirname + '/../node_modules')));
};
