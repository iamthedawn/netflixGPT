import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("MovieList", movies);
  return (
    <div className="px-6 cursor-grab">
      <h1 className="text-2xl font-bold py-4">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex gap-5">
          {movies?.map((movie) => {
            return (
              <MovieCard key={movie?.id} poster_path={movie?.poster_path} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
