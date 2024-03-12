import { useSearchParams } from 'react-router-dom';
import css from './MoviesFilter.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function MoviesFilter({ onSubmit }) {
  const [params, setParams] = useSearchParams();

  const findMoviesByTitle = query => {
    params.set('query', query);
    setParams(params);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.query.value.trim();

    if (searchValue === '') {
      toast('Please, enter movie title for searching!');

      return;
    }

    findMoviesByTitle(searchValue);
    onSubmit(searchValue);
  };

  return (
    <form className={css.input} onSubmit={handleSubmit}>
      <input placeholder="find movie by name" name="query" />
      <button type="submit" className={css.search}>
        Find
      </button>
      <Toaster />
    </form>
  );
}
