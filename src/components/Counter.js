import React, { Component } from 'react';

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment () {
    this.setState({
      count: this.state.count + 1
    },() => {
      console.log(`Callback value ${this.state.count}`)
    })
  }

  incrementH () {
    this.setState((prevState) => {
      count: prevState.count + 1
    })
  }

  incrementByFive () {
    this.incrementH()
    this.incrementH()
    this.incrementH()
    this.incrementH()
    this.incrementH()
  }

  render() {
    return (
      <div>
      <br />
      <h2>Count: {this.state.count}</h2>
      <button onClick={() => this.increment()}>Increment</button>
      <button onClick={() => this.incrementByFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
