const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  mode: 'development',
  externalsPresets: { node: true }, // 为了忽略诸如 path、fs 等内置模块。
  externals: [nodeExternals()], // 以忽略 node_modules 中的所有模块
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