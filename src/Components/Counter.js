import React from 'react'

const Counter = () => {
  return (
    <div className='wrapper'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Cumque aperiam fugit asperiores facilis accusamus</p>
      <div className='counter'>
        <h2>0</h2>
        <button><span>-1</span></button>
        <button><span>+1</span></button>
        <button><span>Reset</span></button> 
      </div>
    </div>
  )
}

export default Counter
