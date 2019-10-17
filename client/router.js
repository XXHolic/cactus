import React from 'react';
import { router } from 'dva';
import Count from './routes/Count';

const { Router, Route, Switch } = router;


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={props => <Count {...props}></Count>} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
