import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { Suspense, lazy } from 'react';
const HomePage = lazy(() => import('../Pages/HomePage'));
const MoviesPage = lazy(() => import('../Pages/MoviesPage'));
const NotFoundPage = lazy(() => import('../Pages/NotFound'));
const Navigation = lazy(() => import('../components/Navigation/Navigation'));
const MovieDetailsPage = lazy(() => import('../Pages/MovieDetailsPage'));
const MovieCast = lazy(() => import('./MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews'));

const App = () => {
  return (
    <div className={css.header}>
      <Navigation></Navigation>

      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<MovieCast />} />
            <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
