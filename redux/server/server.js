import express from "express";
import React,{Fragment} from "react";
import routers from '../routes'
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Header from '../client/component/Header/index'

const app = express();

app.use(express.static("client-dist"));

app.get("*", function(req, res) {
  console.info('req.url',req.url);
  var html = renderToString(
    <StaticRouter context={{}} location={req.url}>
        <Fragment>
        <Header />
        <div className="container" style={{ marginTop: 70 }}>
          {routers}
        </div>
        </Fragment>
    </StaticRouter>
  );
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>react back render</title>
  </head>
  <body>
      <div id="root">${html}</div>
      <script src="./client.js"></script>
  </body>
  </html>
  `);
});

app.listen(3002, function() {
  console.log("server start at localhost:3002");
});
