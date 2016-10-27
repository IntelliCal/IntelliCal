// var debug = process.env.NODE_ENV !== 'production';
var debug = false; //false === production mode
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'public'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './src/main.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|server|db)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: true }),
  ]
};