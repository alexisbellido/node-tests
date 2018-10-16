const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    // Passing an array of file paths to the entry property creates a multi-main entry
    // so there's no need to import CSS from Javascript
    main: [
      './src/index.js',
      './src/css/style.css'
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "../dist/",
    filename: "[name]-[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new CleanWebpackPlugin(
      ['dist'],
      {
        watch: true
      }
    ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: 'public/template.html',
      filename: '../public/index.html'
    })
  ]
};
