let path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	// directory used to resolve paths in entry
	context: path.resolve(__dirname, '../src'),
  entry: {
		// processes main javascript and sass
		main: [
			'./js/app.js',
			'./scss/main.scss'
		],
		// uses installed npm packages for vendor code
		vendor: [
			'react',
			'react-dom',
			'react-router'
		]
	},
  output: {
    filename: 'js/[name].bundle.js',
    publicPath: '../',
		//__dirname refers to the directory where this webpack.config.js lives
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
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					// see https://github.com/webpack-contrib/sass-loader and
					// https://github.com/webpack-contrib/extract-text-webpack-plugin for
					// details about sass.
					//resolve-url-loader may be chained before sass-loader if necessary
					use: [
						{
							loader: 'css-loader?sourceMap'
							//options: {
							//	sourceMap: true
							//}
						},
						{
							loader: 'sass-loader?sourceMap'
							//options: {
							//	sourceMap: true
							//}
						}
					]
					// see: https://webpack.js.org/configuration/module/#rule-use
					//use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	devtool: 'source-map',
	plugins: [
    new ExtractTextPlugin('css/styles.css'),
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
