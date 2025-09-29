import React from "react";
import MoviesCards from "./MoviesCards";

const MoviesList = ({ title, movies }) => {
  // console.log(movies)
  return (
    <div className=" px-12 py-5  ">
      <h1 className="text-2xl text-white text-bold">{title}</h1>
      <div className="flex mt-1 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none]">
        <div className="mt-1 flex flex-shrink-0">
          {movies?.map((movie) => (
            <MoviesCards key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
