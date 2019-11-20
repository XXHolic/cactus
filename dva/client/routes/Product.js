import React from 'react';
import { connect } from 'dva';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {product:{data}} = this.props;
    console.info('product data:',data);

    return (
      <div>
        <p>列表</p>

      </div>
    );
  }

};

// Home.loadData = function (props) {
  // dispatch的返回值就是action
  // return props.dispatch({type: 'count/getList'})
// }

export default connect(({ product }) => ({
  product,
}))(Product);