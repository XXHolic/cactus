import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import reducers from './reducers'
export function getServerStore () {
    return createStore(
        reducers,
        applyMiddleware(thunk)
    )
}


export function getClientStore () {
       // 在这里拿到我们之前挂载在window上的state， 然后作为初始值
       let initState = window.content.state
    return createStore(
        reducers,
        initState,
        applyMiddleware(thunk)
    )
}