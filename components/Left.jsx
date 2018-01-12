import React from 'react';

const Left = ({onChange}) => {
  return (
    <div className='pane left'>
      <h1>Hello World</h1>
      <button onClick={onChange}>Do something</button>
      <p>Go to <a href="#/page2">page 2</a></p>
    </div>
  )
}

export default Left