import { useState, useEffect } from 'react';

import { fetchCars, fetchAll } from 'api/fetchcars';

import Loader from 'components/Loader';
import CarList from 'components/CarList';
import Section from 'components/Section';
import SearchBar from 'components/SerchBar';
import LoadMoreBtn from 'components/LoadMoreBtn';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [totalCars, setTotalCars] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCars, setCurrentCars] = useState([]);

  useEffect(() => {
    const getAllCars = async () => {
      try {
        const data = await fetchAll();
        setTotalCars(data.length);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCars();
  }, []);

  useEffect(() => {
    setIsLoading(true);

    try {
      const fetchData = async () => {
        const data = await fetchCars(page);
        setCurrentCars(prevState => [...prevState, ...data]);
        // setCurrentCars([...currentCars, ...data]);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  const onNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar />
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
