import { useState, useEffect } from 'react';

import { fetchCars, fetchAll } from 'api/fetchcars';

import CarList from 'components/CarList';
import Section from 'components/Section';
import LoadMoreBtn from 'components/LoadMoreBtn';
import Loader from 'components/Loader';

const Catalog = () => {
  const [currentCars, setCurrentCars] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCars, setTotalCars] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  console.log(currentCars);

  useEffect(() => {
    async function getAllCars() {
      const data = await fetchAll();
      setTotalCars(data.length);
    }
    getAllCars();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCars(page);
      setCurrentCars(prevState => [...prevState, ...data]);
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
          {currentCars.length < totalCars && currentCars.length > 0 && (
            <LoadMoreBtn onNextPage={onNextPage} />
          )}
        </Section>
      )}
    </>
  );
};

export default Catalog;
