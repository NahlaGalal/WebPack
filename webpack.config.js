const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: { loader: "babel-loader" }
      },
      { 
        test: /\.css$/, 
        use: "css-loader" 
      }
    ]
  }
};
