import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userId:'',
       title:'',
       body:''
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="userId"/>
          </div>
          <div>
            <input type="text" name="title" />
          </div>
          <div>
            <textarea type="text" name="body" />
          </div>
        </form>
      </div>
    )
  }
}

export default PostForm
