import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFirstCarsPage, getRestOfCars } from '../redux/cars/carsOperations';
import {
  selectCars,
  selectError,
  selectIsLoading,
} from 'redux/cars/carsSelectors';

import {
  selectFilteredCars,
  selectFilterLoading,
  selectFilterError,
} from 'redux/filter/filterSelectors';

import Loader from 'components/Loader';
import CarList from 'components/CarList';
import Section from 'components/Section';
import SearchBar from 'components/SearchBar';
import LoadMoreBtn from 'components/LoadMoreBtn';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filteredCars = useSelector(selectFilteredCars);
  const CarsError = useSelector(selectError);
  const CarsLoading = useSelector(selectIsLoading);
  const FilterError = useSelector(selectFilterError);
  const FilterLoading = useSelector(selectFilterLoading);

  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);

  // console.log(filteredCars);

  useEffect(() => {
    const fetchData = async () => {
      if (page === 1) {
        dispatch(getFirstCarsPage());
        setShowButton(true);
      }

      if (page > 1) {
        const response = await dispatch(getRestOfCars(page));
        if (response.payload.length >= 8) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    };

    fetchData();
  }, [dispatch, page, FilterLoading]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Section>
        <SearchBar />
      </Section>
      {CarsLoading && !CarsError && !FilterError && FilterLoading ? (
        <Loader />
      ) : (
        <Section>
          {filteredCars.length === 0 ? (
            <CarList cars={cars} />
          ) : (
            <CarList cars={filteredCars} />
          )}
          {showButton && <LoadMoreBtn onLoadMore={onLoadMore} />}
        </Section>
      )}
    </>
  );
};

export default Catalog;
