const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-20 absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl md:text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>
      <div className="flex gap-4">
        <button className="text-black bg-white mt-2 md:my-[0%] py-1 md:py-4 px-6 md:px-16 rounded-md hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="text-white bg-[#80808084] p-4 px-16 rounded-md hover:bg-[#808080ae] hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
