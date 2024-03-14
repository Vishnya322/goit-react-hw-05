import css from './MovieList.module.css';
import MovieListContent from '../components/MovieListContent';
import { useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      <div className={css.moviesList}>
        {movies.map(movie => (
          <MovieListContent key={movie.id} movie={movie} state={location} />
        ))}
      </div>
    </ul>
  );
};

export default MovieList;
