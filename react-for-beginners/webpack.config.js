const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
  // see notes about mode variable below
  let production = argv.mode === 'production'

  let config = {
    entry: {
      // processes main javascript and sass
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
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
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

  // If you want to change the behavior according to the mode variable inside the webpack.config.js, you have to use a function,
  // an arrow function with arguments (env, argv) and return a configuration object
  // https://webpack.js.org/concepts/mode/

  // You can also use DefinePlugin to expose process.env.NODE_ENV but in my tests it caused a bigger build

  // Alternatively you can pass an environment variable from the script in package.json, like this:
  // "build": "NODE_ENV=production webpack --mode production --config webpack.config.js --progress"
  // and get the value from process.NODE_ENV here

  if (production) {
    // adding like this because of config.optimization.splitChunks, see above
    // https://webpack.js.org/plugins/split-chunks-plugin/
    config.optimization.minimizer = [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ];
  } else {
    // eslint used only on development
    config.module.rules.push(
      {
        enforce: 'pre', // this is a preloader so it runs before babel-loader
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              emitError: true,
              emitWarning: true,
            }
          }
        ]
      }
    )
  }
  return config;
};
