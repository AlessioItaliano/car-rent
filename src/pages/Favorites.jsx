import { useState, useEffect } from 'react';

import { useFavorites } from 'hooks/useFavorites';
import { fetchCarsById } from 'api/fetchcars';

import Loader from 'components/Loader';
import CarList from 'components/CarList';
import Section from 'components/Section';
import SearchBar from 'components/SearchBar';
import EmptyPage from 'components/EmptyPage';

const Favorites = () => {
  const [favorites] = useFavorites();
  const [isLoading, setIsLoading] = useState(false);
  const [favoritesCars, setFavoritesCars] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const getFavoritCars = async () => {
      try {
        const favoriteCarData = [];

        for (const id of favorites) {
          const response = await fetchCarsById(id);
          favoriteCarData.push(response);
        }

        setFavoritesCars(favoriteCarData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getFavoritCars();
  }, [favorites]);

  return (
    <>
      <Section>
        <SearchBar />
      </Section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!favorites.length ? (
            <EmptyPage />
          ) : (
            <Section>
              <CarList cars={favoritesCars} />
            </Section>
          )}
        </>
      )}
    </>
  );
};

export default Favorites;
