let path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

process.traceDeprecation = true;

module.exports = {
  entry: {
		app: './src/js/app.js',
		vendor: [
			'react',
			'react-dom',
			'react-router'
		]
	},
  output: {
    filename: 'js/[name].bundle.js',
    publicPath: '../',
    path: path.resolve(__dirname, '../static')
  },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, 
				exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['es2015', { 'modules': false }],
								['react']
							]
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }
    })
	]
};
