import React, { Component } from 'react';

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
      <br />
      <h2>Count: {this.state.count}</h2>
      </div>
    )
  }
}

export default Counter
