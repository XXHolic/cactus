import React from 'react'
import { connect } from "react-redux"
import actions from '../../store/actions/counter'

class Counter extends React.Component{
    state = {number: 0}
    render () {
      const {number,increment} = this.props;
      // console.info('ddd');
        return (<div style={{textAlign: 'center'}}>
            <p>{number}</p>
            <button onClick={increment}>+</button>
        </div>)
    }
}
// 连接store
const CounterPage = connect(
    state => state.counter,
    actions
)(Counter)
export default CounterPage