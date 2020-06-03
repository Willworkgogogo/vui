const webpack = require('webpack');
const path = require('path');

const root = path.resolve(__dirname, '../');
const library = '[name]_lib';

module.exports = {
  mode: 'development',
  entry: {
    vendors: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].dll.js',
    path: root + '/dist',
    library,
  },
  plugins: [
    new webpack.DllPlugin({
      path: root + '/dist/[name]-manifest.json',
      name: library,
    }),
  ],
};
