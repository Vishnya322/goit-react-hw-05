import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const details = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2M3M2U1ZmZjYmM3M2QxMzZjNzVlNjgzNzgyNWMwOSIsInN1YiI6IjY1ZThhNjZmZWE0MjYzMDE0ODIxMzg3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YYO_HkBYktrFDc7YLqc5t-uJVjluAhdjAZzgD3mpi00',
  },
  params: {},
};
const url = 'trending/movie/day?language=en-US';

export const getMovies = async () => {
  const response = await axios.get(url, details);
  return response.data.results;
};

export async function fetchMovie(id) {
  const { data } = await axios.get(`/movie/${id}`, details);
  return data;
}

export async function fetchMovieCredits(id) {
  const { data } = await axios.get(`/movie/${id}/credits`, details);
  return data.cast;
}

export async function fetchMovieReview(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`, details);
  return data.results;
}

export async function fetchMoviesByTitle(search) {
  const { data } = await axios.get(`/search/movie?query=${search}`, details);
  return data.results;
}
