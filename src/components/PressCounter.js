import React, { Component } from 'react'

class PressCounter extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}>Pressed {count} times</button>
      </div>
    )
  }
}

export default PressCounter
