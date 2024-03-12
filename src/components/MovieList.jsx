import css from './MovieList.module.css';
import MovieListContent from '../components/MovieListContent';

const MovieList = ({ movies }) => {
  return (
    <ul>
      <div className={css.moviesList}>
        {movies.map(movie => (
          <MovieListContent key={movie.id} movie={movie} />
        ))}
      </div>
    </ul>
  );
};

export default MovieList;
