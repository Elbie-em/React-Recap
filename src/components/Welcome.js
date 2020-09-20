import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <h1>Welcome, I am {this.props.name} , the {this.props.level}</h1>
    )
  }
}

export default Welcome
