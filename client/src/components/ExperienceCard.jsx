import React, { useState } from 'react';
import '../styles/ExperienceCard.css';


export default function ExperienceCard(props) {
const { bucketlist_item } = props

const [show, setShow] = useState(false)
//toggle
const updateShow = () => {
setShow(true)
}



  return (
    <div className='exp-card'>
      <section className='exp-item'>
       <ul>
         {!show ? 
        <li className='bucketlist-item'>
          {props.bucketlist_item}
          <button onClick = {props.onClick}
          className='deleteButton'>x</button>

          <button onClick = {updateShow}
          className='show'>edit</button>

        </li>
        :
        <li className='bucketlist-item'>
          <form>
        <input className='update-form'
        value=''
        type='text'
        placeholder={props.getItem()}
        onChange={props.onChange}>
        </input>
        <button onClick = {props.onUpdate}
        className='show'>update</button>
          </form>

      </li>

         }
        </ul>
      </section>
    </div>
  )
}