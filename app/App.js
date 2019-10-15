var React = require('react');

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.initialCount
    }

    this.increment = this.increment.bind(this);
  }

    increment () {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <span>the count is: </span>
                <span onClick={this.increment}>{this.state.count}</span>
            </div>
        )
    }
}

module.exports = App;