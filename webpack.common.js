const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.js",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Inject css to DOM
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
