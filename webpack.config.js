const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

webpackConfig = {
  context: path.resolve(__dirname, "./src"),
  entry: {
    index: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./src")
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Weather",
    template: path.resolve(__dirname, "./src/index.html")
  }),
  new CopyWebpackPlugin([
    {
      from: './icons',
      to: './images'
    },
  ])
],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        loader: "babel-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        test: /\.jsx?$/,
        query: {
          plugins: ["transform-runtime"]
        }
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './images/[name].[ext]'
            }  
          }
        ]
    },
    {
      test: /\.svg$/,
      loader: 'svg-inline-loader'
  }
    ]
  },
};

module.exports = webpackConfig;