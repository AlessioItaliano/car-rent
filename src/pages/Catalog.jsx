import { useState, useEffect } from 'react';

// import { fetchCars, fetchAll } from 'api/fetchcars';
import { useSelector, useDispatch } from 'react-redux';
import {
  // getFirstCarsPage,
  getRestOfCars,
} from '../redux/cars/carsOperations';
import {
  // selectCars,
  // selectError,
  selectIsLoading,
} from 'redux/cars/carsSelectors';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import CarList from 'components/CarList';
import Section from 'components/Section';
import SearchBar from 'components/SearchBar';
import LoadMoreBtn from 'components/LoadMoreBtn';

const Catalog = () => {
  // const cars = useSelector(selectCars);
  // const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  // const [totalCars, setTotalCars] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCars, setCurrentCars] = useState([]);
  const [currentCars, setCurrentCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { payload } = await dispatch(getRestOfCars(page));

      if (page === 1) {
        setCurrentCars(payload); // Якщо це перша сторінка, замініть поточний список
        setShowButton(true);
      } else {
        setCurrentCars(prevCars => [...prevCars, ...payload]); // Додайте нові дані до поточного списку
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
  //   const fetchData = async () => {
  //     const { payload } = await dispatch(getRestOfCars(page));

  //     if (page === 1) {
  //       setCurrentCars(payload); // Якщо це перша сторінка, замініть поточний список
  //       setShowButton(true);
  //     } else {
  //       setCurrentCars(prevCars => [...prevCars, ...payload]); // Додайте нові дані до поточного списку
  //       if (payload.length >= 8) {
  //         setShowButton(true);
  //       } else {
  //         setShowButton(false);
  //       }
  //     }
  //   };

  //   fetchData();
  // }, [dispatch, page]);

  // useEffect(() => {
  //   // const fetchData = async () => {
  //   const fetchData = async () => {
  //     const { payload } = await dispatch(getRestOfCars(page));
  //     // setCurrentCars(prevState => [...prevState, ...payload]);
  //     if (payload.length >= 8) {
  //       setShowButton(true);
  //     } else {
  //       setShowButton(false);
  //     }
  //     //   if (page === 1) {
  //     //     dispatch(getRestOfCars(page));
  //     //     setShowButton(true);
  //     //   }

  //     //   if (page > 1) {
  //     //     const response = await dispatch(getRestOfCars(page));
  //     //     if (response.payload.length >= 8) {
  //     //       setShowButton(true);
  //     //     } else {
  //     //       setShowButton(false);
  //     //     }
  //     //   }
  //   };

  //   fetchData();
  // }, [dispatch, page]);

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

  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Header />
      <Section>
        <SearchBar />
      </Section>
      {isLoading ? (
        <Loader />
      ) : (
        <Section>
          <CarList cars={currentCars} />
          {showButton && <LoadMoreBtn onLoadMore={onLoadMore} />}
        </Section>
      )}
      <Footer />
    </>
  );
};

export default Catalog;
