function serverRoute (req, res) {
  res.end(`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <p>hello word</p>
  </body>
  </html>
`);
}

module.exports = serverRoute;