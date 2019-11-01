import React, { Fragment} from 'react'
import { Route } from 'react-router-dom'
import Home from './client/component/Home/index'
import Counter from './client/component/Counter/index'

export default (
    <Fragment>
        <Route path="/" exact component={Home}></Route>
        <Route path="/counter" exact component={Counter}></Route>
    </Fragment>
)