import React, {Fragment} from 'react';
import { Route } from 'react-router';
import getRouter from '../routes';
import Count from '../client/routes/Count';

export const routes = (
  <Fragment>
    <Route exact path="/" component={ () => <Count></Count>} />
  </Fragment>
);
