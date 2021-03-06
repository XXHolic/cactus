var path = require('path');
const merge = require('webpack-merge')
const base = require('./webpack.base.js')

const distDirec = "client-dist";
var assetsPath = path.join(__dirname, distDirec);

module.exports = merge(base, {
  entry: './dva/client/index.js',
  output: {
      filename: 'client.js',
      path: assetsPath
  },
  devServer: {
    contentBase: path.resolve(__dirname, distDirec),
    port: 9003,
    hot: true,
    stats: "errors-only",
    overlay: true, // 如果代码出错，会在浏览器页面弹出“浮动层”。
    historyApiFallback: false,
    proxy: {
      '/': {
        target: 'http://localhost:3003',
        secure: false
      }
    }
  },
})