// import path from 'path';
import React from 'react';
import express from "express";
import dva from "dva";
// import webpack from 'webpack';
import { routes } from "./serverRoute";
import { createMemoryHistory } from "history";
import models from "./ssrModel";
import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
// import renderFullPage from './renderFullPage';
// import runtimeSSRMiddle from './runtimeSSRMiddle';

const app = express();

app.use(express.static("client-dist"));

app.get("*", function(req, res) {
  const history = createMemoryHistory();
  history.push(req.url);
  const context = {};
  const app = dva({
    history
  });
  // models.forEach(model => {
  //   app.model(model);
  // });

  app.router(() => (
    <StaticRouter location={req.url} context={context}>
      {routes}
    </StaticRouter>
  ));

  const appDOM = app.start()({
    context
  });

  const curState = appDOM.props.store.getState();
  const html = renderToString(appDOM);

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
      <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(curState)};
      </script>
      <script src="/client.js"></script>
  </body>
  </html>
  `);
});

// app.use((error, req, res) => {
//   res.status(500);
//   res.render('error', { error });
// });

const server = app.listen(3003, () => {
  const { port } = server.address();
  console.info(`Listened at http://localhost:${port}`);
});
