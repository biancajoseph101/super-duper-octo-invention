import React from 'react';
import '../styles/CityCard.css'

export default function CityCard(props) {
  
  return (
    <div className='city-card' onClick={props.onClick}>
      <section className="city-info">
        <h2>{props.name}</h2>
         <img src={props.image} alt={props.name} />
      </section>
    </div>
  )
}