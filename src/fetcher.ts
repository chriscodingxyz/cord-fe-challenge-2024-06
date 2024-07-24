import axios from "axios";

const API_KEY = "fd2db60aefa24cc27c24f546c69f26d5";
const BASE_URL = "https://api.themoviedb.org/3";

// All of your API requests should be in this file

// Write a function to preload the popular movies when page loads & get the movie genres

//https://api.themoviedb.org/3/movie/popular?api_key=fd2db60aefa24cc27c24f546c69f26d5&page=6
export const getPopularMovies = async (page = 1) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`
  );

  console.log("pop movie response data with info + array within ===>", data);

  return data;
};
// https://api.themoviedb.org/3/genre/movie/list?api_key=fd2db60aefa24cc27c24f546c69f26d5&page=6
export const getMovieGenres = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  console.log("movie genres array ===>", data.genres);

  return data.genres;
};

// Write a function to get the movie details based on the movie id taken from the URL.
//https://api.themoviedb.org/3/movie/763215?api_key=fd2db60aefa24cc27c24f546c69f26d5
export const getSingleMovie = async (movieId: string) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  console.log("single movie data ===>", data);
  return data;
};
