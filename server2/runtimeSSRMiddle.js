import ssr from 'express-dva-ssr';
import React from 'react';
import { Route } from 'dva/router';
// import IndexPage from '../src/routes/IndexPage';
// import UsersPage from '../src/routes/Users';
import renderFullPage from './renderFullPage';
import CountModel from '../client/models/count';
import Count from '../client/routes/Count';

const routes = (
  <div>
    {/* <Route exact path="/users" component={UsersPage} /> */}
    <Route exact path="/" component={Count} />
  </div>
);

function onRenderSuccess() {
}

export default ssr.runtimeSSRMiddle({
  routes,
  models: [
    CountModel,
  ],
  renderFullPage,
  onRenderSuccess,
  initialState: {
    count: {

    },
    users: {
      list: [],
      total: null,
      page: null,
    },
  },
});
