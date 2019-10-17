var path = require('path');
const nodeExternals = require('webpack-node-externals');

var serverPath = path.join(__dirname,"server-dist");

module.exports = [
    {
      target: 'node',
        entry: './server/index.js',
        output: {
            path: serverPath,
        },
        externals: [nodeExternals()],
        mode: 'development',
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [["@babel/preset-env"], ["@babel/preset-react"]]
                }
              }
            }
          ]
        }
    }
]