import React, { Component } from 'react'

class SwipeCounter extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
        <button onMouseOver={incrementCount}>Swiped {count} times</button>
      </div>
    )
  }
}

export default SwipeCounter
