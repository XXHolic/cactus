import React, {Fragment} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './component/Header/index'
import routers from '../routes'

export default () =>
  <BrowserRouter>
    <Fragment>
    <Header />
    <div className="container" style={{marginTop: 70}}>
      {routers}
    </div>
    </Fragment>
  </BrowserRouter>
