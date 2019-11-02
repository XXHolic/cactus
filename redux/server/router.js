import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import Header from "../client/component/Header/index";
import {getRouters} from '../routes'

export default function({req,store,context}) {

  return (
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <Fragment>
          <Header />
          <div className="container" style={{ marginTop: 70 }}>
          {getRouters()}
          </div>
        </Fragment>
      </StaticRouter>
    </Provider>
  );
}
