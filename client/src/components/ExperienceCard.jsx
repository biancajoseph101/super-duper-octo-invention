import React, { useState } from 'react';
import '../styles/ExperienceCard.css';
import axios from 'axios';


export default function ExperienceCard(props) {

const [show, setShow] = useState(false)
//toggle
const updateShow = () => {
setShow(true)
}
// const [updatedExperience, setUpdatedExperience] = useState({
//   bucketlist_item: props.bucketlist_item,
//   finished: props.finished,
//   review: props.review,
//   city_id: props.city_id
// })

const handleUpdate = async (e) => {
  e.preventDefault();
  const updatedExperience = props.experiences[props.index].review
  await axios.put(`http://localhost:3001/api/experiences/details/${props.id}`, {review: updatedExperience,
      finished: true});
  setShow(false)
};

const handleChange = (e) => {
  const updatedExperiences = [...props.experiences]
  updatedExperiences[props.index].review = e.target.value
  props.setExperiences(updatedExperiences)

};


  return (
    <div className='exp-card'>
      <div className='exp-item'>
    <button onClick = {props.onClick}
          className='xbutton'>x</button>
       <ul>
         {!show ? 
        <li className='bucketlist-item'>
          {props.bucketlist_item}

          <button onClick = {updateShow}
          className='button'>review</button>
 
        </li>
        :
        <li className='bucketlist-item'>
          <strike>{props.bucketlist_item}</strike>
          
          <h5>Review: {props.review}</h5>
          <form onSubmit= {handleUpdate}>
        <input className='input'
        value={props.review}
        type='text'
        onChange={handleChange}>
        </input>
        <button onClick = {updateShow} className='button'>submit review</button>
          </form>
         
      </li>
         }
        </ul>
      </div>
    </div>
  )
}