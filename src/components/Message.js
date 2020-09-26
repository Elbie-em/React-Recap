import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome Vistor'
    }
  }

  changeMsg () {
    this.setState({
      message: "Thank you for your subscription"
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeMsg()}>Subscribe</button>
      </div>
    )
  }
}

export default Message;
