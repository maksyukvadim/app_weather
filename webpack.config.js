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
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!stylus-loader"
        })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("css/all.css")]
};

module.exports = webpackConfig;
