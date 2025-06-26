import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/Redux/slice/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((state)=>state.movies?.trailerVideo)

  const getMovieVideos = async () => {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const data = await resp.json();

    const trailer = data?.results?.find((video) => {
      return video?.type === "Trailer";
    })
      ? data?.results?.find((video) => {
          return video?.type === "Trailer";
        })
      : data?.results?.[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};
export default useMovieTrailer;
