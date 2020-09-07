const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: 'main.min.[contenthash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },

      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader']
        ,
      },

    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // filename: 'index.html',
    }),
    new VueLoaderPlugin(),

    new MiniCssExtractPlugin({
      filename: 'main.min.[contenthash].css',
    }),
  ],
};
