const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.base.js');

const clientConfig = {
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development',
};

module.exports = merge(config, clientConfig);