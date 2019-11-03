import React from 'react'

class CounterInner extends React.Component{
    state = {number: 0}
    render () {
        return (<div>Counter 的下一级页面</div>)
    }
}
export default CounterInner