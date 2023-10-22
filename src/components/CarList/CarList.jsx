import CarItem from 'components/CarItem';

import * as s from './CarList.styled';

const CarList = ({ cars }) => {
  return (
    <s.List>
      {cars.map(car => (
        <s.Item key={car.id}>
          <CarItem car={car} />
        </s.Item>
      ))}
    </s.List>
  );
};

export default CarList;
