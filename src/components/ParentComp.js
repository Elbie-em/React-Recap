import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: "Boss Dawg"
    }
    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hi Papa ${this.state.parentName} from ${childName}`)
  }
  
  render() {
    return (
      <div>
        <ChildComp handleClick={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComp
