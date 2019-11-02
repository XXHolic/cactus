import express from "express";
import render from './render'
// import config from '../../webpack.redux.client'
// import Webpack from 'webpack';
// import WebpackDevServer from 'webpack-dev-server';
const app = express();


app.use(express.static("client-dist"));

app.get("*", render);

// const compiler = Webpack(config);

// const server = new WebpackDevServer(compiler);

app.listen(3002, function() {
  console.log("back server start at localhost:3002");
  // server.listen(9002, '127.0.0.1', () => {
  //   console.log('front server on http://localhost:9002');
  // });
});
