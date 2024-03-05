import React from "react";
import "./MoviesList.css";
import MoviesItem from "../moviesItem/MoviesItem";
const MoviesList = ({ movies }) => {
  return (
    <ul className="moviesList">
      <MoviesItem movies={movies} />
    </ul>
  );
};

export default MoviesList;
