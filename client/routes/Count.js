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
        <h2>{ count.data }</h2>
        <button key="add" onClick={() => { dispatch({type: 'count/add'})}}>+</button>
        <button key="minus" onClick={() => { dispatch({type: 'count/minus'})}}>-</button>
      </div>
    );
  }

};

export default connect(({ count }) => ({
  count,
}))(Count);