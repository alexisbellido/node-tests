let path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'js/bundle.js',
    publicPath: '../',
    path: path.resolve(__dirname, '../static')
  },
	module: {
		rules: [
			{test: /\.(js|jsx)$/, use: 'babel-loader'}
		]
	}
};
