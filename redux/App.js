import React, { Component, Fragment } from 'react'
import Header from './client/component/Header/index'
import { renderRoutes } from 'react-router-config'

class App extends Component{
  render () {
    // 拿到子路由
    let {route} = this.props
    return (
      <Fragment>
          <Header />
          <div className="container" style={{marginTop: 70}}>
              {renderRoutes(route.routes)}
          </div>
      </Fragment>
    )
  }
}

export default App