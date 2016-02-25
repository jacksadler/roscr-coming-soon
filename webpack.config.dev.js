var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: "./index.js",
  output: {
      path: "build/",
      filename: "dist.js",
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
