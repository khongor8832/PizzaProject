const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js", // Энэ бол src-ын js-ын үндсэн js болох index.js compaildана
  output: {
    filename: "js/main.js", //main.js бол dist орох js зааж өгч байна.
    path: path.resolve(__dirname, "docs"),
  },
  devServer: {
    contentBase: "./docs", //энэ dev сэрвэр аль folder compaildahiig зааж байна.
  },

  plugins: [
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "index.html",
      template: "src/index.html", //Энэ бол мөн өөрөө бичээд бэлдчихсэн html-ыг dist-рүү хийж өгнө.
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
