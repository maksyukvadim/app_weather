const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

webpackConfig = {
  context: path.resolve(__dirname, "./src"),
  entry: {
    index: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    publicPath: "/assets"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./src")
  },
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
      }
    ]
  },
};

module.exports = webpackConfig;
