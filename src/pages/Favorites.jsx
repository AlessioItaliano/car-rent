import { useState, useEffect } from 'react';
import { useFavorites } from 'hooks/useFavorites';
import { fetchCarsById, fetchAll } from 'api/fetchcars';

import Loader from 'components/Loader';
import CarList from 'components/CarList';
import Section from 'components/Section';
import SearchBar from 'components/SearchBar';
import LoadMoreBtn from 'components/LoadMoreBtn';

const Favorites = () => {
  const [favorites] = useFavorites();
  const [page, setPage] = useState(1);
  const [totalCars, setTotalCars] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [favoritesCars, setFavoritesCars] = useState([]);

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

    const getFavoritCars = async () => {
      try {
        const promises = favorites.map(id => fetchCarsById(id));

        const responses = await Promise.all(promises);

        const favoriteCar = responses.map(response => response.data);

        setFavoritesCars(favoriteCar);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getFavoritCars();
  }, [favorites]);

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
          <CarList cars={favoritesCars} />
          {favoritesCars.length < totalCars && favoritesCars.length > 8 && (
            <LoadMoreBtn onNextPage={onNextPage} />
          )}
        </Section>
      )}
    </>
  );
};

export default Favorites;
