import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReview } from '../movies-api';
import css from './MovieReviews.module.css';
import ReviewsGallery from '../components/ReviewsGallery';

export default function MovieReviews() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await fetchMovieReview(movieId);
        setReviews(data);
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
      {<div className={css.center}>{isLoading}</div>}
      {error && <p>Something wrong...</p>}
      {reviews && <ReviewsGallery reviews={reviews} />}
    </>
  );
}
