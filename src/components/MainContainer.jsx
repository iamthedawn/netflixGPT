import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);

  // early return
  if (!movies) return;

  const mainMovie = movies?.[1];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="text-white md:pt-[0%] pt-[30%]">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
