import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/Redux/slice/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // memoization
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );


  const getNowPlayingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addNowPlayingMovies(data?.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
