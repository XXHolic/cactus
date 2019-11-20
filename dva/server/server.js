// import path from 'path';
import React, {Fragment} from 'react';
import express from "express";
import dva from "dva";
// import webpack from 'webpack';
// import { routes } from "./serverRoute";
import getRouter from '../routes';
import { createMemoryHistory } from "history";
import models from "./ssrModel";
import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
// import Count from '../client/routes/Count';
// import renderFullPage from './renderFullPage';
// import runtimeSSRMiddle from './runtimeSSRMiddle';

const app = express();

app.use(express.static("client-dist"));

app.get("*", function(req, res) {
  const URL = req.url;

  if (URL === "/favicon.ico") {
    res.writeHead(302, {
      Location: "http://www.xholic.cn/favicon.ico"
    });
    res.end();
    return;
  }

  const history = createMemoryHistory();
  history.push(URL);
  const context = {};
  const app = dva({
    history
  });

  // const modelKey = URL.length>1?URL.slice(1):'home';
  // app.model(models[modelKey]);
  models.forEach(model => {
    app.model(model);
  });

  app.router(() => (
    <StaticRouter location={URL} context={context}>
      <Fragment>
      {getRouter()}
      </Fragment>

    </StaticRouter>
  ));

  const appDOM = app.start()({
    context
  });


  let promises = [];
  // promises.push(Count.loadData(appDOM.props.store))

  return Promise.all(promises).then(() => {
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
  })





});

// app.use((error, req, res) => {
//   res.status(500);
//   res.render('error', { error });
// });

const server = app.listen(3003, () => {
  const { port } = server.address();
  console.info(`Listened at http://localhost:${port}`);
});
