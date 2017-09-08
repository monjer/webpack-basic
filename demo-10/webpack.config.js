const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/other-page.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Webpack Code Splitting'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // public bundle file name。
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
