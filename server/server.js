import express from 'express';
import webpack from 'webpack';
import config from '../webpack.server.js';
import { matchRoutes } from 'react-router-config'
import {routes} from './serverRoute';
import { render } from './serverRender';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  // webpack compile
  const compiler = webpack(config);
  const options = {
    // publicPath: config.output.publicPath,
    noInfo: true,
    stats: {colors: true},
  };
  app.use(require('webpack-dev-middleware')(compiler, options));
  app.use(require('webpack-hot-middleware')(compiler));

}

// app.use(require('./serverRoute.js'));

app.get('*', function (req, res) {
	// const store = getStore(req);
	const store = {};
	// 根据路由的路径，来往store里面加数据
    console.log('req.path',req.path);
    const matchedRoutes = matchRoutes(routes, req.path);
    // console.log('matchedRoutes',matchedRoutes);
	// 让matchRoutes里面所有的组件，对应的loadData方法执行一次
    let promises = [];
    let headerObj = [];
    var compon = null;

	// matchedRoutes.forEach(item => {
	// 	if (item.route.loadData) {
    //         headerObj = item.route.header;
    //         compon = item.route.component;
	// 		// const promise = new Promise((resolve, reject) => {
	// 		// 	item.route.loadData(store).then(resolve).catch(resolve);
	// 		// })
	// 		// promises.push(promise);
    //     }
    //     console.log('key:',item.route.key);
    // });


    // if (compon) {
        const context = {css: []};
        const html = render(store, compon, req, context,headerObj);
        res.send(html);
    // } else {
        // res.send('');
    // }



	// Promise.all(promises).then(() => {
	// 	const context = {css: []};
    //     const html = render(store, routes, req, context,headerObj);
    //     res.send(html);

		// if (context.action === 'REPLACE') {
		// 	res.redirect(301, context.url)
		// }else if (context.NOT_FOUND) {
		// 	res.status(404);
		// 	res.send(html);
		// }else {
		// 	res.send(html);
		// }
    // })
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



const server = app.listen(8030, () => {
  const { port } = server.address();
  console.info(`Listened at http://localhost:${port}`);
});
