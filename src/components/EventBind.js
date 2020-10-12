import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Hello World, Nice to meet you"
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler () {
    this.setState({
      message: "Goodbye world, it was a pleasure"
    })
  }

  handleClick = () => {
    this.setState({
      message: "Goodbye world, it wasn't a pleasure"
    })
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <br />
        <br />
        <button onClick={this.clickHandler}>Bind Click Me</button>
        <br />
        <br />
        <button onClick={this.handleClick}>Bind Click Me II</button>
      </div>
    )
  }
}

export default EventBind
