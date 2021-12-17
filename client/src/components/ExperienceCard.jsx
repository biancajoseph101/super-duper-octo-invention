import React from 'react';
import '../ExperienceCard.css'

export default function ExperienceCard(props) {
  return (
    <div className='exp-card'>
      <section className='exp-item'>
       <h1>Bucket List:</h1> 
        <h3 className='bucketlist-item'>{props.bucketlist_item}</h3>
      </section>
    </div>
  )
}