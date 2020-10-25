import React, { Component } from 'react'

class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: "Boss Dawg"
    }
    this.greetParent = this.greetParent.bind(this)
  }

  greetParent() {
    alert(`Hi Papa ${this.state.parentName}`)
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default ParentComp
