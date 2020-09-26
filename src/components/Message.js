import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome Vistor'
    }
  }
  render() {
    return(
      <h1>{this.state.message}</h1>
    )
  }
}

export default Message;
