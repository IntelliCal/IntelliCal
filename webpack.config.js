// var debug = process.env.NODE_ENV !== 'production';
var debug = false;
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'public'),
  // devtool: debug ? 'sourcemap' : null,
  devtool: debug ? 'inline-sourcemap' : null,
  // devtool: debug ? 'inline-eval-cheap-source-map' : null,
  entry: './src/main.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|server|db)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
          // ,
          // plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
        }
      }
    ]
  },
  output: {
    path: __dirname + '/public/',
    // path: './public',
    filename: 'bundle.js'
  },
  // externals: {
  //   'react': 'React'
  // },

  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: true }),
  ]
};