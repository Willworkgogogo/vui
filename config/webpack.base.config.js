const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.resolve(__dirname, '../');
const srcRoot = root + '/src';

module.exports = {
  mode: 'development',
  entry: {
    index: srcRoot + '/index.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: root + '/dist'
  },
  resolve: {
    alias: {
      '@': srcRoot
    },
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  module: {
    rules: [{ test: /.tsx?$/, loader: 'ts-loader' }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: srcRoot + '/index.html'
    }),
    new webpack.DllReferencePlugin({
      manifest: root + '/dist/vendors-manifest.json'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: root + '/dist'
  }
};
