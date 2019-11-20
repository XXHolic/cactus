import React from 'react';
import { router } from 'dva';
import Count from './client/routes/Count';
import Home from './client/routes/Home';
import Product from './client/routes/Product';

const { Route } = router;

const routes = [
  {
    path: "/",
    component: () => <Home></Home>,
    key: "home",
    exact: true,
  },
  {
    path: "/count",
    component: () => <Count></Count>,
    key: "count",
    exact: true,
  },
  {
    path: "/product",
    component: () => <Product></Product>,
    key: "product",
    exact: true,
  }
];

export default () => {
  return routes.map((ele) => {
    const {path, key, component, exact} = ele;
    return React.createElement(Route,{path,key,exact,component})
  })
}