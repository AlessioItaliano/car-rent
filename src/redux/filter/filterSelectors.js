// import { createSelector } from '@reduxjs/toolkit';

// export const selectFilteredCars = createSelector(
//   [selectContacts, selectContactsFilter],
//   (contacts, filter) => {
//     return contacts.filter(item =>
//       item.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );

export const selectFilteredCars = state => state.filteredCars.cars;
export const selectFilterLoading = state => state.filteredCars.isLoading;
export const selectFilterError = state => state.filteredCars.error;
