const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    styleguide: [
      './styleguide/components/Logo.jsx'
    ]
  },
  output: {
    path: path.resolve(__dirname, './styleguide/build'),
    filename: 'bundle.js',
    chunkFilename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            target: "es5"
          }
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015","react"]
        }
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: [
      '.js', '.jsx', '.json', '.ts', '.tsx'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BROWSER_ENV': JSON.stringify(true)
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: './template.ejs'
    })
  ]
};
