import { useState, useEffect } from 'react';

import { fetchCars, fetchAll } from 'api/fetchcars';

import CarList from 'components/CarList';
import Section from 'components/Section';
import LoadMoreBtn from 'components/LoadMoreBtn';
import Loader from 'components/Loader';

// import Header from 'components/Header';
// import Hero from 'components/Hero';
// import Benefits from 'components/Benefits';
// import Footer from 'components/Footer';

const Catalog = () => {
  const [currentCars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCars, setTotalCars] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllCars() {
      const data = await fetchAll();
      setTotalCars(data);
    }
    getAllCars();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCars(page);
      setCars([...currentCars, ...data]);
      setIsLoading(false);
    }
    fetchData();
  }, [page]);

  const onNextPage = () => {
    setPage(page + 1);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Section>
          <CarList currentCars={currentCars} />
          {currentCars.length < totalCars.length && currentCars.length > 0 && (
            <LoadMoreBtn onNextPage={onNextPage} />
          )}
        </Section>
      )}
    </>
  );
};

export default Catalog;
