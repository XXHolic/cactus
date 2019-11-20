import React from 'react';
import { connect } from 'dva';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <ul>
          <li><a href='./count'>Count</a></li>
          <li><a href='./product'>Product</a></li>
        </ul>

      </div>
    );
  }

};

// Home.loadData = function (props) {
  // dispatch的返回值就是action
  // return props.dispatch({type: 'count/getList'})
// }

export default connect(({ home }) => ({
  home,
}))(Home);