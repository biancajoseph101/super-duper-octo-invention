import React from 'react'

const Tips = (props) => {

  return (
    <ul>
      {props.tips.map((tip, index) => (
        <li key={index}>
          
          <button className='xTipButton' onClick ={() => props.removeTip(index)}>
            x
          </button>
          {tip} 
        </li>
      ))}
    </ul>
  )
}

export default Tips
