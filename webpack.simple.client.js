var path = require('path');
const merge = require('webpack-merge')
const base = require('./webpack.base.js')

const distDirec = "client-dist";
var assetsPath = path.join(__dirname, distDirec);

module.exports = merge(base, {
  entry: './client-simple/index.js',
  output: {
      filename: 'client.js',
      path: assetsPath
  }
})