import React, { Component } from 'react'

export class user extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

export default user
