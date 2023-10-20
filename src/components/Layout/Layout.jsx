import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Loader from 'components/Loader/Loader';

import * as s from './Layout.styled';

const Layout = () => {
  return (
    <s.Port>
      <Suspense>
        <Outlet />
      </Suspense>
    </s.Port>
  );
};

export default Layout;
