import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieListContent = ({ movie }) => {
  if (!movie.poster_path) {
    return null;
  }
  return (
    <li className={css.item}>
      <Link to={`/movies/${movie.id}`} className={css.link}>
        <p className={css.title}>{movie.title}</p>
      </Link>
    </li>
  );
};
export default MovieListContent;
