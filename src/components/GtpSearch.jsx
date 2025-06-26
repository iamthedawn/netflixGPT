import { BG_IMG } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GtpSearch = () => {
  return (
    <>
     
      <div className="absolute z-[-1]">
        <img
          className="h-screen w-screen object-cover"
          src={BG_IMG}
          alt="bgImg"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GtpSearch;
