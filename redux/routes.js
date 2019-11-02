import React, { Fragment} from 'react'
import { Route } from 'react-router-dom'
import Home from './client/pages/Home'
import Counter from './client/pages/Counter'

const routes = [
    {
        path: '/',
        component: Home,
        key: 'home',
        exact: true,
        loadData: Home.loadData // 加载数据，如果有此配置项，那么则意味着需要加载异步数据
    },
    {
        path: '/counter',
        component: Counter,
        key: 'counter'
    }
]

function getRouters() {
    const router =
    routes.map( route => {
        return <Route {...route}/>
    })

    return router;

}

export {
    getRouters,
    routes
}

// (
//     <Fragment>
//         <Route path="/" exact component={Home}></Route>
//         <Route path="/counter" exact component={CounterPage}></Route>
//     </Fragment>
// )