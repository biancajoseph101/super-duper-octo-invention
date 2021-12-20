import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExperienceCard from '../components/ExperienceCard';
import AddExperience from '../components/AddExperience';

export default function CityDetails(props) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [experiences, setExperiences] = useState([]);

  const getCity = async () => {
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

  const handleClick = (e, experienceId, index) => {
    e.preventDefault();
    axios.delete(
      `http://localhost:3001/api/experiences/details/${experienceId}`
    );
    // window.location.reload();
    let array = experiences;
    array.splice(index, 1);
    setExperiences(array);
    getExperiences();
  };

  const handleUpdate = (e, experienceId, index) => {
    e.preventDefault();
    // console.log(props.match.params.cityId);
    // axios.put(`http://localhost:3001/api/experiences/details/${experienceId}`, {
    //   bucketlist_item: e.target.value,
    //   city_id: props.match.params.cityId
    // });
  };

  const handleChange = (e, index) => {
    e.preventDefault();
    const updatedExperiences = experiences;
    //updateExperience is just a copy
    updatedExperiences[index].bucketlist_item = e.target.value;
    setExperiences(updatedExperiences);

    console.log(updatedExperiences[index].bucketlist_item);
  };

  const getItem = (index) => {
    return experiences[index].bucketlist_item;
  };

  return selectedCity ? (
    <div>
      <section className="city-info">
        <h1>{selectedCity.name}</h1>
        <img src={selectedCity.url} />
        <p>{selectedCity.description}</p>
      </section>
      <h1> Bucket List: </h1>
      <AddExperience {...props} />
      {experiences.map((experience, index) => {
        if (experience.city_id === props.match.params.cityId) {
          return (
            <ExperienceCard
              {...props}
              key={experience._id}
              index={index}
              bucketlist_item={experience.bucketlist_item}
              onClick={(e) => handleClick(e, experience._id, index)}
              onUpdate={(e) => handleUpdate(e, experience._id, index)}
              onChange={(e) => handleChange(e, index)}
              getItem={() => getItem(index)}
            />
          );
        } else {
          console.log('experience doesnt match this city');
        }
      })}
    </div>
  ) : null;
}
