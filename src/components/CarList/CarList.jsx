import CarItem from 'components/CarItem';

import * as s from './CarList.styled';

const CarList = ({ currentCars }) => {
  return (
      <s.List>
        {currentCars.map(car => (
          <s.Item key={car.id}>
            <CarItem car={car} />
          </s.Item>
        ))}
      </s.List>

  );
};

export default CarList;
