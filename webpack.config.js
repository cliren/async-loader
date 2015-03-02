var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components');

module.exports = {
  entry: './src/async-loader.js',
  output: {
    path: __dirname + "/dist",
    filename: 'async-loader.js',
    library: 'AsyncLoader',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules|bower_components/, loader: 'babel-loader'}
    ],
    noParse: [
      //nodeModulesPath
    ]
  },
  resolve: {
    root: [
      nodeModulesPath,
      bowerComponentsPath],
    alias: {},
    extensions: ['',
      '.js'
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin()
  ]
};