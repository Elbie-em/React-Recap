import React from 'react'

const UpdatedComponent = (OriginalComp) => {
  class NewComponent extends Component {
    render () {
      return <OriginalComp name='HOC'/>
    }
  }

  return NewComponent
}

export default UpdatedComponent