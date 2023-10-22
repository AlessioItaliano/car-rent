import { useState, useEffect } from 'react';

import { useFavorites } from 'hooks/useFavorites';
import { fetchCarsById } from 'api/fetchcars';

import Loader from 'components/Loader';
import CarList from 'components/CarList';
import Section from 'components/Section';
import SearchBar from 'components/SearchBar';
import LoadMoreBtn from 'components/LoadMoreBtn';
import EmptyPage from 'components/EmptyPage';

const Favorites = () => {
  const [favorites] = useFavorites();
  const [page, setPage] = useState(1);
  // const [totalCars, setTotalCars] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [favoritesCars, setFavoritesCars] = useState([]);

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
        <>
          {!favorites.length ? (
            <EmptyPage />
          ) : (
            <Section>
              <CarList cars={favoritesCars} />
              {favoritesCars.length < favorites.length &&
                favoritesCars.length > 8 && (
                  <LoadMoreBtn onNextPage={onNextPage} />
                )}
            </Section>
          )}
        </>
      )}
    </>
  );
};

export default Favorites;
