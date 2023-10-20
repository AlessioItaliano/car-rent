import { useState, useEffect } from 'react';

import { fetchCars } from 'services/fetchcars';
import * as s from './CarList.styled';

import CarItem from 'components/CarItem';

const CarList = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCars();
      setCarData(data);
    }
    fetchData();
  }, []);

  return (
    <s.List>
      {carData.map(car => (
        <s.Item key={car.id}>
          <CarItem car={car} />
        </s.Item>
      ))}
    </s.List>
  );
};

export default CarList;
