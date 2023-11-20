import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import Header from 'components/Header';
import Footer from 'components/Footer';

import * as s from './LayoutSecondary.styled';

const LayoutSecondary = () => {
  return (
    <>
      <Header />
      <s.Port>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </s.Port>
      <Footer />
    </>
  );
};

export default LayoutSecondary;
