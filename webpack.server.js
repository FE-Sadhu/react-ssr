const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const config = require('./webpack.base.js');

const serverConfig = {
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  mode: 'development',
  externalsPresets: { node: true }, // 为了忽略诸如 path、fs 等内置模块。
  externals: [nodeExternals()], // 以忽略 node_modules 中的所有模块
}

module.exports = merge(config, serverConfig);
