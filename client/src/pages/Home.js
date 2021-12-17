import React, { useEffect, useState } from 'react';
import CityCard from '../components/CityCard';
import axios from 'axios';

export default function Home(props) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities();
  }, []);
  const getCities = async () => {
    const res = await axios.get(`http://localhost:3001/api/cities`);
    setCities(res.data.cities);
  };
  return (
    <div>
      <h1>Australian Cities</h1>
      <section className="cities-section">
        <div className="grid">
          {cities.map((city) => {
            {
              return (
                <CityCard key={city._id} name={city.name} image={city.url} />
              );
            }
          })}
        </div>
        Cities
      </section>
    </div>
  );
}
