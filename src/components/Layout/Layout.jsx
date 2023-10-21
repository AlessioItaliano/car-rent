import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Loader from 'components/Loader/Loader';

// import SideBar from 'components/SideBar';

import * as s from './Layout.styled';

const Layout = () => {
  return (
    <div>
      {/* <SideBar /> */}
      <s.Port>
        <Suspense>
          <Outlet />
        </Suspense>
      </s.Port>
    </div>
  );
};

export default Layout;
