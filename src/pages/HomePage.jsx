import { useEffect, useState } from 'react';
import { getMovies } from '../movies-api';
import MovieList from '../components/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
        setError(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <b>Loading movies...</b>}
      {error && <b>HTPP ERROR!!!</b>}
      {movies.length > 0 && <MovieList movies={movies}></MovieList>}
    </div>
  );
};
export default MoviesPage;
