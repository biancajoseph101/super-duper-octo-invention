import React from 'react'

const Tips = (props) => {

  return (
    <ul>
      {props.tips.map((tip, index) => (
        <li key={index}>
          {tip} 
          <button className='xButton' onClick ={() => props.removeTip(index)}>
            x
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Tips
