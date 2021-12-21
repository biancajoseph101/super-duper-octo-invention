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

const handleUpdate = (e, experienceId) => {
  e.preventDefault();
  const updatedExperience = props.experiences[props.index]
  console.log(updatedExperience)
  axios.put(`http://localhost:3001/api/experiences/details/${experienceId}`, updatedExperience);
};

const handleChange = (e) => {
  const updatedExperiences = [...props.experiences]
  updatedExperiences[props.index].review = e.target.value
  props.setExperiences(updatedExperiences)

};


  return (
    <div className='exp-card'>
      <section className='exp-item'>
       <ul>
         {!show ? 
        <li className='bucketlist-item'>
          {props.bucketlist_item}

          <button onClick = {props.onClick}
          className='button'>x</button>

          <button onClick = {updateShow}
          className='button'>complete</button>

        </li>
        :
        <li className='bucketlist-item'>
          {props.bucketlist_item}
          <form onSubmit= {() => handleUpdate(props.id)}>
        <input className='input'
        value={props.review}
        type='text'
        onChange={handleChange}>
        </input>
        <button className='button'>submit review</button>
          </form>
      </li>
         }
        </ul>
      </section>
    </div>
  )
}