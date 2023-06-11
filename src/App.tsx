import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'Components/sharedLayout/sharedLayout';

const Home = lazy(() => import('./pages/home'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
