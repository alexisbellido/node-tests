const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    // Passing an array of file paths to the entry property creates a multi-main entry
    // so there's no need to import CSS from Javascript
    main: [
      './src/index.js',
      './src/scss/style.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "../dist/",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new CleanWebpackPlugin(
      ['dist']
    ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "public/template.html",
      filename: "../public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};
