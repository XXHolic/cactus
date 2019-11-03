import React from "react";
import { BrowserRouter } from "react-router-dom";
import { getRouters } from "../routes";
import { Provider } from "react-redux"; // 配合使用redux
import { getClientStore } from "../store"; // 导入store

export default () => (
  <Provider store={getClientStore()}>
    <BrowserRouter>{getRouters()}</BrowserRouter>
  </Provider>
);
