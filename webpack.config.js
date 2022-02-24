const path = require("path");
module.exports = {
  entry: "./main.js",
  output: {
    filename: "minified.js",
    path: path.resolve(__dirname, "mini"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
