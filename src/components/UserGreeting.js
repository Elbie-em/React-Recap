import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : false,
    }
  }
  
  render() {
    return (
      <div>
        <h1>Welcome to Guest</h1>
        <h1>Welcome to React</h1>
      </div>
    )
  }
}

export default UserGreeting
