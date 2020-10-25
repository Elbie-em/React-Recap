import React from 'react'


const ChildComp = ({handleClick}) => {
  return (
    <div>
      <button onClick={handleClick}>Greet the Boss</button>
    </div>
  )
}

export default ChildComp
