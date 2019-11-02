import React, {Component} from 'react';
import { connect } from 'react-redux'
import actions from '../../store/actions/home'

class Home extends Component {
    componentDidMount () {
      // 获取数据 在本地切换的时候需要异步加载数据
      this.props.getList()
    }
    render () {
      const { list } = this.props;
      console.info('list',list);
        return (<div className="row">
            <h1>Home</h1>
            <ul className="list-group">
                {list.map(item => <li key={item.id} className="list-group-item">{item.name}</li>)
                }
            </ul>
        </div>)
    }
}
Home = connect(
    state => state.home,
    actions
)(Home)

// 此方法是用来异步加载数据， 并且放到仓库中去
Home.loadData = function (store) {
  // dispatch的返回值就是action
  return store.dispatch(actions.getList())
}

export default Home;