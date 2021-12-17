import React, { useState, useEffect } from 'react';
import '../styles/ExperienceCard.css';
import DeleteExperience from '../components/DeleteExperience'



export default function ExperienceCard(props) {

  
  return (
    <div className='exp-card'>
      <section className='exp-item'>
      
       <ul>
       <DeleteExperience {...props}/>

        <li className='bucketlist-item'>
          {props.bucketlist_item}</li>
        </ul>
      </section>
    </div>
  )
}