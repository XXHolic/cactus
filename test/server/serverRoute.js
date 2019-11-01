import React from 'react';
import { Route } from 'react-router';
import Count from '../client/routes/Count';

export const routes = (
  <div>
    <Route exact path="/" component={ () => <Count></Count>} />
  </div>
);
