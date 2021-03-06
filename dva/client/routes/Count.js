import React from 'react';
import { connect } from 'dva';

class Count extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {dispatch} = this.props;
    const {count} = this.props;

    return (
      <div>
        <h2>{ count }</h2>
        <button key="add" onClick={() => { dispatch({type: 'count/add'})}}>+</button>
        <button key="minus" onClick={() => { dispatch({type: 'count/minus'})}}>-</button>
      </div>
    );
  }

};

Count.loadData = function (props) {
  // dispatch的返回值就是action
  return props.dispatch({type: 'count/getList'})
}

export default connect(({ count }) => ({
  count,
}))(Count);