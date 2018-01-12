import React from 'react';

const Left = ({onChange}) => {
  return (
    <div className='pane left'>
      <h1>Hello World</h1>
      <p>This is left</p>
      <button onClick={onChange}>Do something</button>
    </div>
  )
}

export default Left