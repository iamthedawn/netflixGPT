import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { getWebsiteLanguage } from "../utils/Redux/slice/configSlice";
import { useRef } from "react";
import client from "../utils/openAi";

const GptSearchBar = () => {
  const language = useSelector(getWebsiteLanguage);
  const srchText = useRef(null);

  const handleGptSrchClick = async (e) => {
    e.preventDefault();

    // make an api call to chatgpt api
    const response = await client.responses.create({
      model: "gpt-3.5-turbo",
      instructions: "You are a guy with extensive movie knowledge",
      input: srchText?.current?.value,
    });

    console.log("gpt answer",response.output_text);
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form className="bg-black w-full md:w-1/2 grid grid-cols-12">
        <input
          ref={srchText}
          className="p-4 m-4 col-span-8"
          type="text"
          placeholder={lang?.[language]?.gptSearchPlaceHolder}
        />
        <button
          onClick={(e) => handleGptSrchClick(e)}
          className="py-2 px-4 bg-red-700 m-4 text-white col-span-4"
        >
          {lang?.[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
