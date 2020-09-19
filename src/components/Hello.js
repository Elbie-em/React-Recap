import React from 'react';

const HelloJSX = () => {
  return (
    <div>
      <h1>Hello from JSX Element</h1>
    </div>
  )
}

const HelloNonJSX  = () => {
  return React.createElement('div',null,React.createElement('h1',null,'Hello from Non JSX element'))
}

export { HelloJSX, HelloNonJSX }
