const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      { test: /.tsx?$/, loader: 'ts-loader', include: path.resolve(__dirname, '../src') },
      {
        test: /\.tsx?$/,
        loader: 'react-docgen-typescript-loader',
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [path.resolve(__dirname, '../src/icons')],
        options: {
          symbolId: 'icon-[name]',
        },
      }
    );
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias['@'] = path.resolve(__dirname, '../', 'src');
    return config;
  },
};
