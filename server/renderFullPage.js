export default function renderFullPage({ html, state }) {
  const ssrHtml = `
  <!DOCTYPE html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
  <div id="root">
  ${html}
  </div>
  <script>
  window.__INITIAL_STATE__ = ${JSON.stringify(state)};
  </script>
  <script src="./server-dist/bundle.js"></script>
  </body>
  `;
  return ssrHtml;
}
