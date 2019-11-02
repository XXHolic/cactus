import {renderToString} from 'react-dom/server'
import getRouter from './router'
import {routes} from '../routes'
import { matchPath } from 'react-router-dom'
import { getServerStore } from "../store";

export default  function (req, res) {
  const reqUrl = req.url;
  if (reqUrl === '/favicon.ico') {
    res.status(302);
    res.append('Location', 'http://www.xholic.cn/favicon.ico');
    res.send();
    return;
  }

  let context = {}
  let store = getServerStore()
      // matchPath 是路由提供的工具方法， 可以用来判断路径和路由是否匹配
      let matchRoutes = routes.filter( route => (matchPath(req.url, route)))
      let promises = []
      // 遍历需要渲染的模板列表， 看是否需要异步加载数据
      matchRoutes.map(route => {
          // 判断是否需要加载异步数据
          if (route.loadData) { // 如果需要加载数据，调用其loadData方法
              promises.push(route.loadData(store))
          }
      })
      // console.info('req.url',req.url);

      return Promise.all(promises).then(() => {
        const router = getRouter({req,store,context});

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
            <script>
            // 这里主要是保证服务器端的store和本地创建的store一样
            // 一定要放在client前边，因为会在client中调用
            // 同步服务器端的state对象
            window.content = {
                state: ${JSON.stringify(store.getState())}
            }
        </script>
            <script src="./client.js"></script>
        </body>
        </html>
        `);
      });


}