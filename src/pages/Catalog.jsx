import { useState, useEffect } from 'react';

// import { fetchCars, fetchAll } from 'api/fetchcars';
import { useSelector, useDispatch } from 'react-redux';
import { getFirstCarsPage, getRestOfCars } from '../redux/cars/carsOperations';
import {
  selectCars,
  // selectError,
  selectIsLoading,
} from 'redux/cars/carsSelectors';

import Loader from 'components/Loader';
import CarList from 'components/CarList';
import Section from 'components/Section';
import SearchBar from 'components/SearchBar';
import LoadMoreBtn from 'components/LoadMoreBtn';

const Catalog = () => {
  const cars = useSelector(selectCars);
  // const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  console.log(cars);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  // const [totalCars, setTotalCars] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCars, setCurrentCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (page === 1) {
        dispatch(getFirstCarsPage());
        setShowButton(true);
      }

      if (page > 1) {
        const { payload } = await dispatch(getRestOfCars(page));
        if (payload.length >= 8) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    };

    fetchData();
  }, [dispatch, page]);

  // useEffect(() => {
  //   if (page > 1) dispatch(getRestOfCars(page));
  // }, [page, dispatch]);

  // useEffect(() => {
  //   const getAllCars = async () => {
  //     try {
  //       const data = await fetchAll();
  //       setTotalCars(data.length);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getAllCars();
  // }, []);

  // useEffect(() => {
  //   setIsLoading(true);

  //   try {
  //     const fetchData = async () => {
  //       const data = await fetchCars(page);
  //       setCurrentCars(prevState => [...prevState, ...data]);
  //     };
  //     fetchData();
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, [page]);

  const onNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Section>
        <SearchBar />
      </Section>
      {isLoading ? (
        <Loader />
      ) : (
        <Section>
          <CarList cars={cars} />
          {/* {cars.length > 0  && <LoadMoreBtn onNextPage={onNextPage} />} */}
          {showButton && <LoadMoreBtn onNextPage={onNextPage} />}
        </Section>
      )}
    </>
  );
};

export default Catalog;
