let path = require('path'),
    webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'js/bundle.js',
    publicPath: '../',
    path: path.resolve(__dirname, '../static')
  }
};
