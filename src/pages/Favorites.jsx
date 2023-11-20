import { useSelector } from 'react-redux';

import { selectFavoritesCars } from 'redux/favorites/favoritesSelectors';

import CarList from 'components/CarList';
import Section from 'components/Section';
import SearchBar from 'components/SearchBar';
import EmptyPage from 'components/EmptyPage';

const Favorites = () => {
  const favoritesCarsList = useSelector(selectFavoritesCars);

  return (
    <>
      <Section>
        <SearchBar />
      </Section>
      <>
        {!favoritesCarsList.length ? (
          <EmptyPage />
        ) : (
          <Section>
            <CarList cars={favoritesCarsList} />
          </Section>
        )}
      </>
    </>
  );
};

export default Favorites;
