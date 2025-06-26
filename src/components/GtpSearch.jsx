import { BG_IMG } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GtpSearch = () => {
  return (
    <div>
      <div className="absolute z-[-1]">
        <img src={BG_IMG} alt="bgImg" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GtpSearch;
