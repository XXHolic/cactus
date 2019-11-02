import {renderToString} from 'react-dom/server'
import getRouter from './router'

export default  function (req, res) {
  const reqUrl = req.url;
  if (reqUrl === '/favicon.ico') {
    res.status(302);
    res.append('Location', 'http://www.xholic.cn/favicon.ico');
    res.send();
    return;
  }

  const router = getRouter(req);

  console.info('req.url',req.url);

  var html = renderToString(router);
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
}