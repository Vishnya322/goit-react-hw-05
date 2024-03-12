import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { fetchMoviesByTitle } from '../movies-api';
import css from './MoviesPage.module.css';
import MoviesFilter from '../components/MoviesFilter';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [params] = useSearchParams();
  const movieTitle = params.get('query') ?? '';

  useEffect(() => {
    async function refreshMovies() {
      handleSubmit(movieTitle);
    }

    refreshMovies();
  }, [movieTitle]);

  const handleSubmit = async movieTitle => {
    try {
      setMovies([]);
      setIsLoading(true);
      setError(null);
      const data = await fetchMoviesByTitle(movieTitle);

      setMovies(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <MoviesFilter onSubmit={handleSubmit} />
      <div className={css.center}>
        {error && <p>Something wrong...</p>}
        {movies.length === 0 && !isLoading && !error && !movieTitle && (
          <p>No movies found for the given query</p>
        )}
      </div>

      <MovieList movies={movies} />
    </>
  );
}
