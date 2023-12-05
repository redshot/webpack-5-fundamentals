const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {}
        },
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css' // [name] is like a placeholder or we can hardcode the file as main.css or we can use any file name we want
    })
  ],
});

/**
 * - Some configurations were removed in this file because it is existing in webpack.common.js already
 * - The build command is temporarily updated from "NODE_ENV=production webpack --config webpack.prod.js" to
 * "webpack --config webpack.prod.js" because the first command prompts an error
 * 
 */
