import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { getWebsiteLanguage } from "../utils/Redux/slice/configSlice";

const GptSearchBar = () => {
  const language = useSelector(getWebsiteLanguage);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang?.[language]?.gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 bg-red-700 m-4 text-white col-span-3">
          {lang?.[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
