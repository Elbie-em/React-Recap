import React, { Component } from 'react'

class User extends Component {
  render() { 
    const {render} = this.props
      return (
      <div>
        <h3>{render(true)}</h3>
      </div>
    )
  }
}

export default User
