import Button from 'components/Button';

import * as s from './SearchBar.styled';
import makes from 'makes.json';
// import Select from 'react-select';
import { useState } from 'react';

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  // console.log(selectedOption);

  const CarMakeList = makes.map(make => ({
    value: `${make}`,
    label: `${make}`,
  }));

  const CarPriceList = (() => {
    let price = [];

    const priceFunc = () => {
      for (let i = 5; i <= 1000; i += 5) {
        price.push({
          value: i,
          label: i,
        });
      }
      return price;
    };

    return priceFunc();
  })();

  // const toggleClearable = () => {
  //   setIsClearable(!isClearable);
  // };

  return (
    <s.Box>
      <s.Container>
        <s.FilterBox>
          <s.Label htmlFor="carBrand">Car brand</s.Label>
          <s.SelectForm
            id="carBrand"
            isClearable={true}
            isSearchable={true}
            options={CarMakeList}
            value={selectedOption}
            placeholder={'Enter the text'}
            onChange={setSelectedOption}
          />
        </s.FilterBox>

        <s.FilterBox>
          <s.Label htmlFor="price">Price/ 1 hour</s.Label>
          <s.SelectForm
            id="price"
            isClearable={true}
            isSearchable={true}
            options={CarPriceList}
            value={selectedPrice}
            placeholder={'To $'}
            onChange={setSelectedPrice}
          />
        </s.FilterBox>

        <div>
          <Button>Search</Button>
        </div>
        <div>
          <Button>Clear</Button>
        </div>
      </s.Container>
    </s.Box>
  );
};

export default SearchBar;
