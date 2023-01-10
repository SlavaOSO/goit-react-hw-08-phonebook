import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';


const Layout = () => {
  return (
    <div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;