import React from 'react';
import dva from 'dva';
import { RouterContext } from 'dva/router';

export default function createApp(opts) {
  const app = dva(opts);
  app.model(require("./models/count").default);

  app.router(({ history, renderProps}) => {
    return <RouterContext {...renderProps} />;
  });
  return app;
}
