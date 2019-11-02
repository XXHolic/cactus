import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { getServerStore } from "../store";
import { StaticRouter } from "react-router-dom";
import Header from "../client/component/Header/index";
import routes from '../routes'

export default function(req) {
  let context = {};
  let store = getServerStore();

  return (
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <Fragment>
          <Header />
          <div className="container" style={{ marginTop: 70 }}>
          {routes}
          </div>
        </Fragment>
      </StaticRouter>
    </Provider>
  );
}
