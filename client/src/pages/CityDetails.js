import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExperienceCard from '../components/ExperienceCard';
import SubmitExperience from '../components/SubmitExperience';

export default function CityDetails(props) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [experiences, setExperiences] = useState([]);

  const getRide = async () => {
    const res = await axios.get(
      `http://localhost:3001/api/cities/details/${props.match.params.cityId}`
    );
    setSelectedCity(res.data.city);
  };

  const getExperiences = async () => {
    const res = await axios.get(`http://localhost:3001/api/experiences`);
    setExperiences(res.data.experiences);
  };

  useEffect(() => {
    getCity();
    getExperiences();
  }, []);

  return selectedCity ? (
    <div>
      <section className="city-info">
        <h1>{selectedCity.name}</h1>
        <img src={selectedCity.url} />
        <p>{selectedCity.description}</p>
      </section>
      <SubmitExperience {...props} />
      {experiences.map((experience) => {
        if (experience.city_id === props.match.params.cityId) {
          return (
            <ExperienceCard
              key={experience._id}
              bucketlist_item={experience.bucketlist_item}
            />
          );
        } else {
          console.log('experience doesnt match this city');
        }
      })}
    </div>
  ) : null;
}
