import React from 'react'

const TipInput = (props) => {

  return (
    <div className='tips'>
      <label>Add Tip: </label>
      <input type="text" className="input" />
      <button className= 'tipbutton' onClick={props.addTip}>+</button>
    </div>
  )
}

export default TipInput
