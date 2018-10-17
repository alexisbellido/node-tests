const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// If you want to change the behavior according to the mode variable inside the webpack.config.js, you have to use a function,
// an arrow function with arguments (env, argv) and return a configuration object
// https://webpack.js.org/concepts/mode/

// You can also use DefinePlugin to expose process.env.NODE_ENV but in my tests it caused a bigger build

// Alternatively you can pass an environment variable from the script in package.json, like this:
// "build": "NODE_ENV=production webpack --mode production --config webpack.config.js --progress"
// and get the value from process.NODE_ENV here

var config = {
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
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/jpg',
              limit: 3000,
              // file-loader receives the same options
              // adding a rule for for file-loader may confuse webpack
              fallback: 'file-loader',
              name: '[name].[ext]',
              outputPath: 'i/',
              publicPath: '/react-test/dist/i'
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
              // file-loader receives the same options
              // adding a rule for for file-loader may confuse webpack
              fallback: 'file-loader',
              name: '[name].[ext]',
              outputPath: 'i/',
              publicPath: '/react-test/dist/i'
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
    // using two instances HtmlWebpackPlugin to create two files from different templates
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "public/template.html",
      filename: "../public/index.html"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "public/template-footer.html",
      filename: "../public/footer.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};

module.exports = (env, argv) => {
  let production = argv.mode === 'production'
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
