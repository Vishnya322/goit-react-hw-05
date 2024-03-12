import css from './MovieItem.module.css';
import GoBackLink from '../components/GoBackLink';

export default function MovieItem({ movie }) {
  return (
    <>
      <GoBackLink />
      <div className={css.movie}>
        <div className={css.image_container}>
          <img
            className={css.poster}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className={css.details}>
          <h2 className={css.title}>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h2>
          <p className={css.overview}>{movie.overview}</p>
          <div className={css.metadata}>
            <p className={css.rating}>
              <b>Rating:</b> {movie.vote_average}
            </p>
            <p className={css.genres}>
              <b>Genres:</b>{' '}
              {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
            </p>
            <p className={css.budget}>
              <b>Budget: </b>$ {movie.budget}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
