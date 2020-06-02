/* eslint-disable import/no-extraneous-dependencies */

'use strict';

const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const JsUglifyPlugin = require('uglifyjs-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CssOptimizePlugin = require('optimize-css-assets-webpack-plugin');
const CssPurgePlugin = require('purgecss-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const glob = require('glob');

module.exports = (configs) => {
  function isProduction() {
    return configs.env === 'production';
  }

  const optimization = {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /\/node_modules\//,
          chunks: 'all',
          priority: -10,
          enforce: true,
        },
      },
    },
  };
  if (isProduction()) {
    optimization.minimizer = [
      new JsUglifyPlugin({cache: true, parallel: true}),
      new CssOptimizePlugin({}),
    ];
  }

  return {
    optimization,
    mode: configs.env,
    devtool: isProduction() ? false : 'source-map',
    entry: {
      main: path.resolve('client', 'src', 'main.ts'),
    },
    output: {
      path: path.resolve('dist'),
      filename: '[name].[chunkhash].js',
    },
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [
        path.resolve('client', 'src'),
        path.resolve('node_modules'),
      ],
      plugins: [new TsconfigPathsPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ['ts-loader', 'angular2-template-loader'],
          include: path.resolve('client', 'src'),
        },
        {
          test: /\.html$/,
          use: ['html-loader'],
          include: path.resolve('client', 'src'),
          exclude: /index\.html$/,
        },
        {
          test: /\.css$/,
          use: [CssExtractPlugin.loader, 'css-loader'],
          include: [
            path.resolve('node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.css'),
          ],
        },
        {
          test: /\.less$/,
          use: [
            CssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  strictMath: true,
                },
              },
            },
          ],
          include: path.resolve('client', 'src', 'assets', 'styles'),
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: path.resolve('client', 'src'),
            },
          }],
          include: path.resolve('client', 'src', 'assets', 'img'),
        },
        {
          test: /\.(woff(2)?|ttf|otf|eot|svg)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: path.resolve('client', 'src'),
            },
          }],
          include: path.resolve('client', 'src', 'assets', 'fonts'),
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          WEBSITE_URL: JSON.stringify(configs.websiteUrl),
          CDN_URL: JSON.stringify(configs.cdnUrl),
        },
      }),
      new CssExtractPlugin({filename: 'assets/styles/[name].[chunkhash].css'}),
      new CssPurgePlugin({
        paths: glob.sync(`${path.resolve('client', 'src')}/**/*`, {nodir: true}),
        whitelist: ['collapse', 'fade', 'show', 'slide', 'active', 'sr-only', 'd-block', 'text-light', 'loading-bar-spinner'],
        whitelistPatterns: [/^bg-/, /^dropdown/, /^carousel/, /^modal/, /^toast/, /^ng/],
      }),
      new HtmlPlugin({
        template: path.resolve('client', 'src', 'index.html'),
        googleApiKey: configs.googleApiKey,
        googleTagId: configs.googleTagId,
      }),
    ],
  };
};
