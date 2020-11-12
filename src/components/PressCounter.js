import React, { Component } from 'react'

class PressCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return {count : prevState.count + 1}
    })
  }
  
  render() {
    const {count} = this.state
    return (
      <div>
        <button onClick={this.incrementCount}>Pressed {count} times</button>
      </div>
    )
  }
}

export default PressCounter
