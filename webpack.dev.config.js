const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    contentBase: "./dist",
    compress: true,
    hot: true,
    overlay: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: "/node_modules/",
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
