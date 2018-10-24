const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
  let production = argv.mode === 'production'

  let config = {
    entry: {
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
          use: production ? [
            {
              loader: 'babel-loader',
            }
          ] : [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'eslint-loader',
              options: {
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.jpg$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/jpg',
                limit: 3000,
                fallback: 'file-loader',
                name: '[name].[ext]',
                outputPath: 'i/',
                publicPath: '/dist/i'
              }
            }
          ]
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/png',
                limit: 3000,
                fallback: 'file-loader',
                name: '[name].[ext]',
                outputPath: 'i/',
                publicPath: '/dist/i'
              }
            }
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

  if (production) {
    config.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    };
  }
  return config;
};
