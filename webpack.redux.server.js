var path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge')
const base = require('./webpack.base.js')

var serverPath = path.join(__dirname,"server-dist");

module.exports = merge(base, {
  target: 'node', // 告诉webpack 打包的是node环境的
  entry: './redux/server/index.js',
  output: {
      filename: 'server.js',
      path: serverPath
  },
  // 负责检测所有引入不得node的核心模块，并且通知webpack不需要将核心代码打入到server.js 文件中去
  externals: [nodeExternals()],
})