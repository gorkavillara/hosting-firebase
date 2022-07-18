const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Production Build",
    template: path.join(__dirname, "src/index.html")
  }), new MiniCssExtractPlugin()]
};
