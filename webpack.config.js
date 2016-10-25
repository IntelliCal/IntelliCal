module.exports = {
  entry: './public/main.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: process.env.PORT || 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:
          {
            presets:['react']
          }
      }
    ]
  }
}