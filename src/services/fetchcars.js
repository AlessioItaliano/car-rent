import axios from 'axios';

export async function fetchCars() {
  const searchParams = new URLSearchParams({
    completed: false,
    limit: 8,
    page: 4,
  });
  const cars = await axios.get(
    `https://64c2ad55eb7fd5d6ebd0337b.mockapi.io/adverts/?${searchParams}`
  );

  console.log(cars.data);
  return cars.data;
}

// .then(res => {
//   if (res.ok) {
//       return res.json();
//   }
//   // handle error
// }).then(tasks => {
//   // mockapi returns first 10 tasks that are not completed
// }).catch(error => {

//   // handle error
// })
