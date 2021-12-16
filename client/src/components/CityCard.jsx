import React from 'react';

export default function CityCard(props) {
  return (
    <div className='city-card' onClick={props.onClick}>
      <section className="city-info">
        <h1>{props.name}</h1>
        <img src={props.image} />
      </section>
    </div>
  )
}