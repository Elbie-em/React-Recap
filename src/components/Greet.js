import React from 'react';

const Greet = (props) => {
  return (
    <div>
      <h1>Hello, I am {props.name} and my Level is {props.level}</h1>
      {props.children}
    </div>
  )
}

export default Greet;
