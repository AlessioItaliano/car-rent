import { useEffect, useState } from 'react';

import { getFilteredCars } from 'redux/filter/filterOperations';

import makes from 'makes.json';

import { variables } from '../../stylesheet/variables';
import * as s from './SearchBar.styled';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [mileageMin, setMileageMin] = useState('');
  const [mileageMax, setMileageMax] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

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

  const handleMileage = e => {};

  const handleSearch = async e => {
    e.preventDefault();

    const fetchData = async () => {
      try {
        const response = await dispatch(
          getFilteredCars(selectedBrand, selectedPrice, mileageMin, mileageMax)
        );
        console.log(response.payload);
        // Handle the response or dispatch actions based on the response here
      } catch (error) {
        // Handle errors if necessary
      }
    };

    fetchData();
  };

  const clearFields = () => {
    setSelectedBrand(null);
    setSelectedPrice(null);
    setMileageMin('');
    setMileageMax('');
  };

  useEffect(() => {
    if (
      selectedBrand !== null ||
      selectedPrice !== null ||
      mileageMin !== '' ||
      mileageMax !== ''
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [selectedBrand, selectedPrice, mileageMin, mileageMax]);

  return (
    <>
      <s.Container>
        <s.CarBrandFilterBox>
          <s.Label htmlFor="carBrand">Car brand</s.Label>
          <s.SelectForm
            id="carBrand"
            name="carBrand"
            isClearable={true}
            isSearchable={true}
            options={CarMakeList}
            value={selectedBrand}
            placeholder={'Enter the text'}
            onChange={setSelectedBrand}
            styles={{
              control: provided => ({
                ...provided,
                backgroundColor: variables.colors.bgInput,
                color: variables.colors.primary,
                borderRadius: '12px',
                height: '48px',
                border: 'none',
              }),
              indicatorSeparator: () => ({ display: 'none' }),
              dropdownIndicator: (base, state) => ({
                ...base,
                transition: 'transform 0.5s',
                transform: state.selectProps.menuIsOpen
                  ? 'rotate(180deg)'
                  : 'none',
              }),
              placeholder: base => ({
                ...base,
                color: variables.colors.primary,
              }),
            }}
          />
        </s.CarBrandFilterBox>

        <s.PriceFilterBox>
          <s.Label htmlFor="price">Price/ 1 hour</s.Label>
          <s.SelectForm
            id="price"
            name="price"
            isClearable={true}
            isSearchable={true}
            options={CarPriceList}
            value={selectedPrice}
            placeholder={'To $'}
            onChange={setSelectedPrice}
            styles={{
              control: provided => ({
                ...provided,
                backgroundColor: variables.colors.bgInput,
                color: variables.colors.primary,
                borderRadius: '12px',
                height: '48px',
                border: 'none',
              }),
              indicatorSeparator: () => ({ display: 'none' }),
              dropdownIndicator: (base, state) => ({
                ...base,
                transition: 'transform 0.5s',
                transform: state.selectProps.menuIsOpen
                  ? 'rotate(180deg)'
                  : 'none',
              }),
              placeholder: base => ({
                ...base,
                color: variables.colors.primary,
              }),
            }}
          />
        </s.PriceFilterBox>

        <s.MileageBox>
          <s.Label htmlFor="mileage">Сar mileage / km</s.Label>
          <s.MainLabelBox>
            <s.SecondaryLabelBox>
              <s.LabelInside>From</s.LabelInside>
              <s.InputFieldMin
                minLength="3"
                maxLength="6"
                format="##,###"
                decimalScale={3}
                thousandSeparator={true}
                value={mileageMin}
                onChange={handleMileage}
              />
            </s.SecondaryLabelBox>
            <s.SecondaryLabelBox>
              <s.LabelInside>To</s.LabelInside>
              <s.InputFieldMax
                minLength="3"
                maxLength="6"
                format="##,###"
                decimalScale={3}
                thousandSeparator={true}
                value={mileageMax}
                onChange={handleMileage}
              />
            </s.SecondaryLabelBox>
          </s.MainLabelBox>
        </s.MileageBox>

        <s.Button
          type="submit"
          onClick={handleSearch}
          disabled={isDisabled}
          aria-label="Search cars by filter"
        >
          Search
        </s.Button>
        <s.Button
          type="button"
          onClick={clearFields}
          disabled={isDisabled}
          aria-label="Reset filters"
        >
          Reset filters
        </s.Button>
      </s.Container>
    </>
  );
};

export default SearchBar;
