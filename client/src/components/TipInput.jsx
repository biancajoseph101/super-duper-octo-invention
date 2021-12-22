import React, { useState } from 'react'

const TipInput = (props) => {

  // const [inputValue, manageInputValue] = useState('')

  return (
    <div className='tips'>
      <label>Add Tip: </label>
      <input type="text" className="input" />
      <button className= 'button' onClick={props.addTip}>Add Tip</button>
    </div>
  )
}

export default TipInput
