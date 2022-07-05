const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: 'development',

  entry: {
    main: ['./src/index.tsx']
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  devtool: 'eval-cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
          use :['style-loader','css-loader','sass-loader',]
      },
    ],
  },

  devServer: {
    static: './dist',
    hot: true
  },

  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    }),
  ]
});