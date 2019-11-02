import React, { Fragment} from 'react'
import { Route } from 'react-router-dom'
import Home from './client/component/Home/index'
import CounterPage from './client/pages/Counter'

export default (
    <Fragment>
        <Route path="/" exact component={Home}></Route>
        <Route path="/counter" exact component={CounterPage}></Route>
    </Fragment>
)