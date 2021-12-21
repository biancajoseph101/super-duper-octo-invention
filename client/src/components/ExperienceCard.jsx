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
console.log('this is id', props.id)

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
  console.log(props.experiences[props.index].review)

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
          className='button'>review</button>

        </li>
        :
        <li className='bucketlist-item'>
          <h3>{props.bucketlist_item}</h3>
          <h5>Review: {props.review}</h5>
          <form onSubmit= {handleUpdate}>
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