var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

var assetsPath = path.join(__dirname, "client-dist");

module.exports = env => {
    return {
        entry: './client/index.js',
        output: {
            path: assetsPath,
            publicPath: '/',
            filename: 'index.js',
        },
        mode: env.NODE_ENV,
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [["@babel/preset-env"], ["@babel/preset-react"]],
                  plugins: ["@babel/plugin-transform-runtime"]
                }
              }
            }
          ]
        },
        devServer: {
          contentBase: path.resolve(__dirname, assetsPath),
          port: 8040,
          hot: true,
          stats: "errors-only",
          overlay: true,
          historyApiFallback: true
        },
        plugins: [
          new CleanWebpackPlugin(),
          new HtmlWebpackPlugin({
            title: "首页",
            template: "./client/index.html",
            minify: {
              //压缩HTML文件
              removeComments: true, //移除HTML中的注释
              collapseWhitespace: false //删除空白符与换行符
            }
          })
        ]
    }
  }