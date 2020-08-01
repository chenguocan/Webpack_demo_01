const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
});
module.exports = {
  mode: "production",
  plugins: [htmlPlugin],
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        use: ["url-loader?limit=16940"],
      },
    ],
  },
};
