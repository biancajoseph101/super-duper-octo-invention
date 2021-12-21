import React from 'react';
import '../styles/CityCard.css'

export default function CityCard(props) {
  return (
    <div className='city-card' onClick={props.onClick}>
      <section className="city-info">
        <h1>{props.name}</h1>
         <img src={props.image} alt={props.name} />
      </section>
    </div>
  )
}