import React from 'react';
import { router } from 'dva';
import getRouter from '../routes';
const { Router, Switch } = router;


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {getRouter()}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
