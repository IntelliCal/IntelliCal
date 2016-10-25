// module.exports = {
//   entry: './public/main.js',
//   output: {
//     path: './public',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     inline: true,
//     contentBase: './public',
//     port: process.env.PORT || 8100
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel',
//         query:
//           {
//             presets:['react']
//           }
//       }
//     ]
//   }
// }




var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "public"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: './main.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
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
    // path: __dirname + "/src/",
    path: './public',
    filename: "build.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};