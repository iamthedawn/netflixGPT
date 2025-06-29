import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="text-white mt-[0] md:mt-[-15rem] z-10 relative">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
