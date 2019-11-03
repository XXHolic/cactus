import React from 'react'
import ReactDOM from 'react-dom'
import PageRouter from './router'
// hydrate 表示把服务端渲染未完成的工作完成，比如绑定事件完成
ReactDOM.hydrate(<PageRouter />, document.getElementById('root'))