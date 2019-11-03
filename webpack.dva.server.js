var path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

var serverPath = path.join(__dirname,"server-dist");

module.exports = env =>{
    return {
        entry: './server/index.js',
        output: {
            publicPath: '/',
            path: serverPath,
            filename: 'bundle.js',
        },
        externals: [nodeExternals()],
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
        plugins: [
          new CleanWebpackPlugin()
        ]
    }
  }