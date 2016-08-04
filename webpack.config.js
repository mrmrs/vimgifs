var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [path.join(process.cwd(), 'source', 'js', 'index.js')],
  output: {
    path: '.tmp/',
    filename: 'build.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  }
}
