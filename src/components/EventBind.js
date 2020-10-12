import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Hello World, Nice to meet you"
    }
  }

  clickHandler () {
    this.setState({
      message: "Goodbye world, it was a pleasure"
    })
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <br />
        <br />
        <button onClick={clickHandler}>Bind Click Me</button>
      </div>
    )
  }
}

export default EventBind
