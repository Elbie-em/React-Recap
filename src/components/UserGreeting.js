import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : false,
    }
  }
  
  render() {

    /**
    // Short circuit Operator
    return this.state.isLoggedIn && <div>Welcome to React</div>
    //Tenerary Operator

    return this.state.isLoggedIn ? (<div>Welcome to React</div>) : (<div>Welcome Guest</div>)

    //Elements variables

    let message;
    if(this.state.isLoggedIn){
      message = <h1>Welcome to React</h1>
    }else{
      message = <h1>Welcome Guest</h1>
    }

    return <div>{message}</div>

    */
    
    //Conditional Rendering 
    if (this.state.isLoggedIn){
      return (
        <div>
          <h1>Welcome to React</h1>
        </div>
      )
    }else{
      return (
        <div>
          <h1>Welcome Guest</h1>
        </div>
      )
    }
    
  }
}

export default UserGreeting
