import express from 'express';
import React from 'react'
import Home from '../client/component/Home/index'
import Header from '../client/component/Header/index'
import Counter from '../client/component/Counter/index'
import {renderToString} from 'react-dom/server'


const app = express();

app.use(express.static('client-dist'));

app.get('/',function (req, res) {
  var home = renderToString(<Home />);
  var head = renderToString(<Header />);
  var counter = renderToString(<Counter />);
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
  ${home}
  ${head}
      <div id="root">${counter}</div>
      <script src="./client.js"></script>
  </body>
  </html>
  `);
});



app.listen(3001,function() {
  console.log('server start at localhost:3001');
});