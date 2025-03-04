import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "./utils/languageConstants";
// import openai from "./utils/openAi";
import { addSearchMovie } from "./utils/moviesSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store?.config?.lang);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjhlYzUwOTM4NWJjOTBhYjg3NWI5ODlmOWNjYzNjMSIsInN1YiI6IjY2NjE1OWE4NmRjMjgwM2M5YjhkN2Q4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Osg_i22fPpliVVbXjQHvBjPjMMa__xxU26BwSeOrd-o",
    },
  };
  const handleGptSearchClick = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText.current.value +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await movies.json();
    dispatch(addSearchMovie(json.results));
    //make an API call to GPT API and to get movie results
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some Movies for the query : " +
    //   searchText.current.value +
    //   ". only give me name of  movies, comma seperated like a example result given a head. Example Result: Gadar , Don ,Koi mil gaya ,sholay ,Avtaar";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults);
  };
  return (
    <div className="">
      <form
        className="w-10/12 md:w-6/12 mt-10   grid grid-cols-12 bg-black p-2 mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className=" text-black p-1 md:p-2 my-1 md:my-1 mx-2 col-span-9"
          placeholder={lang[langKey]?.placeHolder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 md:text-lg text-xs text-center items-center my-1 bg-red-600 rounded-sm px-1 md:px-4 md:py-2 md:font-bold"
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
