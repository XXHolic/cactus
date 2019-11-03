import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import actions from '../../store/actions/counter'

class Counter extends React.Component{
    state = {number: 0}
    render () {
      const {number,increment} = this.props;
      // console.info('ddd');
        return (<div>
            <p>{number}</p>
            <button onClick={increment}>+</button>
            {/* <div><Link to="/counter/inner">下一级路由</Link></div> */}
        </div>)
    }
}
// 连接store
Counter = connect(
    state => state.counter,
    actions
)(Counter)
export default Counter