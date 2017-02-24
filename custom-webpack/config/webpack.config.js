// Webpack dependencies
let path = require('path'),
    webpack = require('webpack'),
    buildPath = path.resolve(__dirname, '../static');

// TODO continue building webpack config
module.exports = {
  entry: {
    main: [
      './index.js'
    ]
  },
  output: {
    path: buildPath,
    publicPath: '../',
    filename: 'js/[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  }
}
