import React from 'react';
import { connect } from 'dva';

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3
    };
  }

  render() {
    const {dispatch} = this.props;
    const {count} = this.state;

    return (
      <div>
        <h2>{ count }</h2>
        <button key="add" onClick={() => { dispatch({type: 'count/add'})}}>+</button>
        <button key="minus" onClick={() => { dispatch({type: 'count/minus'})}}>-</button>
      </div>
    );
  }

};

export default connect(({ count }) => ({
  count,
}))(Count);