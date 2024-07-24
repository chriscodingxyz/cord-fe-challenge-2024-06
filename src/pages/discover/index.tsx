import React, { useEffect, useState } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default function Discover() {
  // You don't need to keep the current structure of this state object. Feel free to restructure it as needed.
  const [state, setState] = useState({
    keyword: "",
    year: 0,
    results: [],
    movieDetails: null,
    totalCount: 0,
    genreOptions: [],
    ratingOptions: [
      { id: 7.5, name: 7.5 },
      { id: 8, name: 8 },
      { id: 8.5, name: 8.5 },
      { id: 9, name: 9 },
      { id: 9.5, name: 9.5 },
      { id: 10, name: 10 },
    ],
    languageOptions: [
      { id: "GR", name: "Greek" },
      { id: "EN", name: "English" },
      { id: "RU", name: "Russian" },
      { id: "PO", name: "Polish" },
    ],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Write a function to preload the popular movies when page loads & get the movie genres
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const popMoviesData = await fetcher.getPopularMovies();
        const genreArray = await fetcher.getMovieGenres();
        // const searchedMovies = await fetcher.getMovies("Batman", 1999);

        setState((prev) => ({
          ...prev,
          results: popMoviesData.results,
          totalCount: popMoviesData.total_results,
          genreOptions: genreArray,
        }));
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error.message || "Failed to fetch movie details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Write a function to get the movie details based on the movie id taken from the URL.
  const getMovieDetails = async (movieId: number) => {
    setIsLoading(true);
    try {
      const details = await fetcher.getSingleMovie(movieId);
      setState((prevState) => ({ ...prevState, movieDetails: details }));
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setError(error.message || "Failed to fetch movie details");
    } finally {
      setIsLoading(false);
    }
  };

  const searchMovies = async (keyword: string, year: number) => {
    setIsLoading(true);
    try {
      const movies = await fetcher.getMovies(keyword, year);
      setState((prev) => ({
        ...prev,
        results: movies.results,
        totalCount: movies.total_results,
      }));
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError(error.message || "Failed to fetch movie details");
    } finally {
      setIsLoading(false);
    }
  };

  const {
    genreOptions,
    languageOptions,
    ratingOptions,
    totalCount,
    results,
    movieDetails,
  } = state;

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return <div>Error: {error.message || "An unexpected error occurred"}</div>;

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle>
      <MovieFilters>
        <SearchFilters
          genres={genreOptions}
          ratings={ratingOptions}
          languages={languageOptions}
          searchMovies={(keyword, year) => searchMovies(keyword, year)}
        />
      </MovieFilters>
      <MovieResults>
        {totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
        <MovieList movies={results || []} genres={genreOptions || []} />
        {/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
      </MovieResults>
    </DiscoverWrapper>
  );
}

const DiscoverWrapper = styled.div`
  padding: 60px 45px;
  border: 4px solid green;
`;

const TotalCounter = styled.div`
  font-weight: 900;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header``;
