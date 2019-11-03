import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import {getRouters} from '../routes'

export default function({req,store,context}) {

  return (
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
          {getRouters()}
      </StaticRouter>
    </Provider>
  );
}
