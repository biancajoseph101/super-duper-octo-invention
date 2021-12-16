import React from 'react';

export default function ExperienceCard(props) {
  return (
    <div className='exp-card'>
      <section className='exp-item'>
        <h1 className='rating'>{props.bucketlist_item}</h1>
      </section>
    </div>
  )
}