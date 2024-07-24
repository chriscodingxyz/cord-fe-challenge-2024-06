import axios, { AxiosError } from "axios";

const API_KEY = "fd2db60aefa24cc27c24f546c69f26d5";
const BASE_URL = "https://api.themoviedb.org/3";

//asked chatgpt for this handleerror part
const handleError = (error: AxiosError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const errorMessage =
      (error.response.data as any).status_message || "Unknown error";
    throw new Error(`Error ${error.response.status}: ${errorMessage}`);
  } else if (error.request) {
    // The request was made but no response was received
    throw new Error("No response received from server");
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new Error(`Error: ${error.message}`);
  }
};

// All of your API requests should be in this file

// Write a function to preload the popular movies when page loads & get the movie genres

//https://api.themoviedb.org/3/movie/popular?api_key=fd2db60aefa24cc27c24f546c69f26d5&page=6
export const getPopularMovies = async (page = 1) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`
    );

    console.log("pop movie response data with info + array within ===>", data);

    return data;
  } catch (error) {
    handleError(error as AxiosError);
  }
};
// https://api.themoviedb.org/3/genre/movie/list?api_key=fd2db60aefa24cc27c24f546c69f26d5&page=6
export const getMovieGenres = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    console.log("movie genres array ===>", data.genres);

    return data.genres;
  } catch (error) {
    handleError(error as AxiosError);
  }
};

// Write a function to get the movie details based on the movie id taken from the URL.
//https://api.themoviedb.org/3/movie/763215?api_key=fd2db60aefa24cc27c24f546c69f26d5
export const getSingleMovie = async (movieId: number) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    console.log("single movie data ===>", data);
    return data;
  } catch (error) {
    handleError(error as AxiosError);
  }
};

//api allows for a blank year
//https://api.themoviedb.org/3/search/movie?api_key=fd2db60aefa24cc27c24f546c69f26d5&query=batman&year=&page=1
export const getMovies = async (keyword: string, year: number, page = 1) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}&year=${year}&page=${page}`
    );
    console.log("search MOVIES data ===>", data);
    return data;
  } catch (error) {
    handleError(error as AxiosError);
  }
};
