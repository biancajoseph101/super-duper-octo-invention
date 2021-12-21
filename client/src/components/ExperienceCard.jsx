import React, { useState } from 'react';
import '../styles/ExperienceCard.css';
import axios from 'axios';


export default function ExperienceCard(props) {

const [show, setShow] = useState(false)
//toggle
const updateShow = () => {
setShow(true)
}
const [updatedExperience, setUpdatedExperience] = useState({
  review: ``
})

// useEffect(() => {
//   getCity();
//   getExperiences();
// }, []);

const handleUpdate = (e, experienceId) => {
  // e.preventDefault();
  setUpdatedExperience({ finished: true });
  axios.put(`http://localhost:3001/api/experiences/details/${experienceId}`, {
    updatedExperience
  });
  setUpdatedExperience({});
};

const handleChange = (e) => {
  e.preventDefault();
  setUpdatedExperience({ review: e.target.value });
};


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
        name='review'
        review={updatedExperience.review}
        onChange={handleChange}
          >
        </input>
        <button onClick = {()=> {handleUpdate(props.id)}}

        className='visited'>submit review</button>
          </form>

      </li>

         }
        </ul>
      </section>
    </div>
  )
}