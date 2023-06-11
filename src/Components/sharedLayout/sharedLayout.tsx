import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from 'Components/appBar/appBar';

export default function SharedLayout() {
  return (
    <>
      <ResponsiveAppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
