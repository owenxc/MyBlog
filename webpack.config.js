const path = require("path");
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      //解析less
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',  
          'less-loader' 
        ]
      },
    ]
  },
  plugins: [],
  devServer: {}
};
