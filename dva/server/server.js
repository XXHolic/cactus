import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from '../../webpack.dva.server.js/index.js';
import { routes } from './serverRoute';
import models from './ssrModel';
import renderFullPage from './renderFullPage';
import runtimeSSRMiddle from './runtimeSSRMiddle';

const app = express();

app.use(express.static('client-dist'));

app.get('*', function (req, res) {

 let func = runtimeSSRMiddle({routes, renderFullPage,models})(req,res,()=>{});
//  func(req);


//     res.end(`
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <meta charset="utf-8" />
//     </head>
//     <body>
//       <p>hello word3</p>
//     </body>
//     </html>
//   `)
    // app.use(require('./serverRender'));
});

app.use((error, req, res) => {
  res.status(500);
  res.render('error', { error });
});



const server = app.listen(8030, () => {
  const { port } = server.address();
  console.info(`Listened at http://localhost:${port}`);
});
