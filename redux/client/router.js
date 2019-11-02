import React, {Fragment} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './component/Header/index'
import routers from '../routes'
import { Provider } from 'react-redux' // 配合使用redux
import { getClientStore } from '../store' // 导入store



export default () =>
<Provider store={getClientStore()}>
  <BrowserRouter>
    <Fragment>
    <Header />
    <div className="container" style={{marginTop: 70}}>
      {routers}
    </div>
    </Fragment>
  </BrowserRouter>
  </Provider>
