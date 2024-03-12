import { Outlet, useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { Suspense, useEffect, useState } from 'react';
import { fetchMovie } from '../movies-api';
import MovieItem from '../components/MovieItem';
import AdditionalInfo from '../components/AdditionalInfo';

export default function MovieDetailsPage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await fetchMovie(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      {<div>{isLoading}</div>}

      {error && <p>Something wrong...</p>}

      {movie && (
        <>
          <MovieItem movie={movie} />
          <div className={css.cont}>
            <h2 className={css.adinfo}>Additional information:</h2>
          </div>
          <AdditionalInfo />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
