import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LayoutMain from 'components/LayoutMain/LayoutMain';
import LayoutSecondary from 'components/LayoutSecondary/LayoutSecondary';

const HomePage = lazy(() => import('pages/Home'));
const CatalogPage = lazy(() => import('pages/Catalog'));
const FavoritesPage = lazy(() => import('pages/Favorites'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/" element={<LayoutSecondary />}>
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

// import { lazy } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import Layout from 'components/Layout/Layout';
// import Layout2 from 'components/Layout2/Layout2';

// const HomePage = lazy(() => import('pages/Home'));
// const CatalogPage = lazy(() => import('pages/Catalog'));
// const FavoritesPage = lazy(() => import('pages/Favorites'));

// export const App = () => {
//   return (
//     <Routes>
//       {/* <Route
//         path="/"
//         element={
//           <Layout2>
//             <Route index element={<HomePage />} />
//           </Layout2>
//         }
//       /> */}
//       <Route
//         path="/catalog"
//         element={
//           <Layout>
//             <Route index element={<CatalogPage />} />
//           </Layout>
//         }
//       />
//       <Route
//         path="/favorites"
//         element={
//           <Layout>
//             <Route index element={<FavoritesPage />} />
//           </Layout>
//         }
//       />
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };
