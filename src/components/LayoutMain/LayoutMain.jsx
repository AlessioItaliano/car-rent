import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import Footer from 'components/Footer';

import * as s from './LayoutMain.styled';

const LayoutMain = () => {
  return (
    <>
      <s.Port>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </s.Port>
      <Footer />
    </>
  );
};

export default LayoutMain;
