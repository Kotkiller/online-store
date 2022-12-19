const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

  module.exports = {
    entry: './src/index.ts',
   devtool: 'inline-source-map',
   devServer: {
    contentBase: 'dist',
    compress: true,
    port: 3000
  },
    module: {
      rules: [
        {
            test: /\.html$/,
            loader: 'html-loader',
          },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {},
              },
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ],
          },
      ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: 'src/index.html',
          filename: 'index.html',
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
          },
        }),
        new MiniCssExtractPlugin({
          filename: 'style-[hash].css',
        }),
      ],
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
  }