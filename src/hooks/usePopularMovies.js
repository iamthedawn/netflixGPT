import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/Redux/slice/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((state) => state.movies?.popularMovies);

  const getPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addPopularMovies(data?.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};
export default usePopularMovies;
