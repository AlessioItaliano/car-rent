import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFirstCarsPage, getRestOfCars } from '../redux/cars/carsOperations';
import {
  selectCars,
  selectError,
  selectIsLoading,
} from 'redux/cars/carsSelectors';

import Loader from 'components/Loader';
import CarList from 'components/CarList';
import Section from 'components/Section';
import SearchBar from 'components/SearchBar';
import LoadMoreBtn from 'components/LoadMoreBtn';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);

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
  }, [dispatch, page]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Section>
        <SearchBar />
      </Section>
      {isLoading && !error ? (
        <Loader />
      ) : (
        <Section>
          <CarList cars={cars} />
          {showButton && <LoadMoreBtn onLoadMore={onLoadMore} />}
        </Section>
      )}
    </>
  );
};

export default Catalog;
