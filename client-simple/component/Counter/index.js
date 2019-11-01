import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  handleCount = () => {
    let { number } = this.state;
    number++;
    this.setState({
      number
    });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <p>{this.state.number}</p>
        <button
          onClick={this.handleCount}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
