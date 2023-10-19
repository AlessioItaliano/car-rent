// useEffect, Suspense;
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('pages/Home'));
const CatalogPage = lazy(() => import('pages/Catalog'));
const FavoritesPage = lazy(() => import('pages/Favorites'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

// /catalog
// /favorites
