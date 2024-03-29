' use strict ';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/main.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist/js'
  },
  watch: true,

  devtool: "source-map",

};
