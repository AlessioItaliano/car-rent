import axios from 'axios';

axios.defaults.baseURL = `https://64c2ad55eb7fd5d6ebd0337b.mockapi.io`;

export async function fetchAll() {
  const cars = await axios.get('/adverts');

  return cars.data;
}

export async function fetchCars(page) {
  const searchParams = new URLSearchParams({
    limit: 8,
    page,
  });
  const cars = await axios.get(`/adverts/?${searchParams}`);

  return cars.data;
}

export async function fetchCarsById(id) {
  const cars = await axios.get(`/adverts/${id}`);

  return cars.data;
}
