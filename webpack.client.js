const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", '@babel/preset-env'],
          plugins: ["@babel/plugin-transform-runtime"]
        }
      }
    }]
  }
}