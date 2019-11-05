import React from 'react';
import { router } from 'dva';
import Count from './client/routes/Count';

const { Route } = router;

const routes = [
  {
    path: "/",
    component: () => <Count></Count>,
    key: "home",
    exact: true,
  }
];

export default () => {
  return routes.map((ele) => {
    const {path, key, component, exact} = ele;
    return React.createElement(Route,{path,key,exact,component})
  })
}