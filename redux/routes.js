import React, { Fragment } from "react";
// import { Route } from "react-router-dom";
import Home from "./client/pages/Home";
import Counter from "./client/pages/Counter";
import CounterInner from "./client/pages/CounterInner";
import App from "./App";
import { renderRoutes } from "react-router-config";

const pageCounter = ({route}) => (
    <Fragment>
        <Counter></Counter>
        {renderRoutes(route.routes)}
    </Fragment>

)


const routes = [
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/",
        component: Home,
        key: "home",
        exact: true,
        loadData: Home.loadData // 加载数据，如果有此配置项，那么则意味着需要加载异步数据
      },
      {
        path: "/counter",
        component: pageCounter,
        key: "counter",
        // exact: true,
        routes: [
            {
                path: "/counter/inner",
                component: CounterInner,
                key: "/counter/inner",
                // exact: true,
            }
        ]
      },

    ]
  }
];

function getRouters() {
  return renderRoutes(routes);
}

export { getRouters, routes };
