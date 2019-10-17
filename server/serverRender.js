import React from 'react';
import dva from 'dva';
import { createMemoryHistory } from 'dva';
import Count from '../client/routes/Count';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'dva/router';
import { renderRoutes } from 'react-router-config';
// import { Provider } from 'react-redux';
// import { Helmet } from "react-helmet";
const history = createMemoryHistory();

export const render = (store, routes, req, context,header) => {
  // const app = dva({
  //   history: history,
  //   initialState: store
  // });

  // app.model(require("../client/models/count").default);

  // const showRoutes = () => <StaticRouter location={req.path} context={context}>
  // {renderRoutes(routes)}
// </StaticRouter>;

// app.router(showRoutes);

		// const content = renderToString(app.start());
    const content = renderToString(<Count></Count>);
    // console.info('dddd',content);
    // const helmet = Helmet.renderStatic();

    // const headerMsg = header.map((ele) => {
    //   ele
    // });

		const cssStr = context.css.length ? context.css.join('\n') : '';

    return `
    <!DOCTYPE html>
			<html>
				<head>
          <title>dddd</title>
					<style>${cssStr}</style>
				</head>
				<body>
					<div id="root">${content}</div>
					<script>

					</script>
					<script src='/server-dist/bundle.js'></script>
				</body>
			</html>
	  `;

}

						// window.context = {
						// 	state: ${JSON.stringify(store.getState())}
						// }

// import { matchRoutes } from 'react-router-config'

// function serverRoute (req, res) {

//   const matchedRoutes = matchRoutes(routes, req.path);



//   res.end(`
//   <!DOCTYPE html>
//   <html>
//   <head>
//     <meta charset="utf-8" />
//   </head>
//   <body>
//     <p>hello word</p>
//   </body>
//   </html>
// `);
// }

// module.exports = serverRoute;