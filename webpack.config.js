const path = require('path');
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const { chunk } = require("lodash");
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// import path from 'path';
// import { path, resolve } from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';




module.exports = {
   entry: './src/main.js',
   output: {
      filename: 'main.[contenthash].js',
      path: resolve(__dirname, 'build')
   },
   module: {
      rules: [
         {
            test: /\.html$/i,
            loader: "html-loader",
         },
         {
            test: /\.(css)$/i,
            use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
         },
         {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
         },
         {
            test: /\.(png|jpeg|gif|svg|jpg)$/i,
            loader: 'file-loader',
            options: {
               name: '[path][name].[ext]'
            }
         },
      ]
   },
   plugins: [
     // new BundleAnalyzerPlugin(),
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css'
      }),
      new HtmlWebpackPlugin({
         template: resolve(__dirname, 'index.html'),
         filename: 'index.html',
         chunks: ['index'],
      }),
   ],
   devServer: {
      port: 3000,
      watchFiles: ['./*']
   },
}


