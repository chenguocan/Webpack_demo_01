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
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
