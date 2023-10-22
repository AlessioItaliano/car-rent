import { useState } from 'react';

const KEY_LS = 'favoritesCarList';

const getFavorites = () => {
  const getCars = localStorage.getItem(KEY_LS);
  const result = getCars ? JSON.parse(getCars) : [];

  return result;
};

const addFavorite = carId => {
  const cars = getFavorites();
  cars.push(carId);
  localStorage.setItem(KEY_LS, JSON.stringify(cars));
};

const removeFavorite = carId => {
  const cars = getFavorites();
  const newCars = cars.filter(id => id !== carId);
  localStorage.setItem(KEY_LS, JSON.stringify(newCars));
};

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(getFavorites());

  const isFavorite = carId => favorites.includes(carId);

  const setIsFavorite = carId => {
    if (isFavorite(carId)) {
      removeFavorite(carId);
      setFavorites(prev => prev.filter(id => id !== carId));
    } else {
      addFavorite(carId);
      setFavorites(prev => [...prev, carId]);
    }
  };

  return [favorites, isFavorite, setIsFavorite];
};
