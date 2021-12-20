import React, { useState } from 'react';
import '../styles/ExperienceCard.css';


export default function ExperienceCard(props) {

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
          className='show'>complete</button>

        </li>
        :
        <li className='bucketlist-item'>
          {props.bucketlist_item}
          <form>
        <input className='review'
        value={props.review}
        type='text'
        onChange={props.onChange}>
        </input>
        <button onClick = {props.onUpdate}
        className='visited'>submit review</button>
          </form>

      </li>

         }
        </ul>
      </section>
    </div>
  )
}