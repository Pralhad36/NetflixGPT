import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { addClearCast } from "./utils/moviesSlice";

const GetDetail = () => {
  const dispatch = useDispatch();
  const casts = useSelector((store) => store?.movies?.movieCasteDetails);
  const movieDetails = useSelector((store) => store?.movies?.movieDetails);

  const clearCast = () => {
    dispatch(addClearCast());
  };

  console.log(casts);
  return (
    <>
      <div className=" fixed flex flex-col md:flex-row justify-center w-full h-full md:h-screen px-2 pt-0 md:pt-20 md:px-14 text-white bg-black">
        <div className=" md:w-[50%] w-full flex flex-col">
          <button
            onClick={clearCast}
            className="absolute z-50 mt-28 md:mt-4 ml-3 px-2 md:px-4 py-1 md:py-2 rounded-md font-bold hover:bg-gray-800  bg-black border border-1 w-20"
          >
            back
          </button>
          <img
            className="md:mt-0 mt-20 md:-z-2 w-full py-1 object-cover"
            alt="image"
            src={
              "https://image.tmdb.org/t/p/w500/" + movieDetails?.backdrop_path
            }
          />
          <h1 className=" font-bold text-md md:text-xl pb-1 ml-3">
            Casts & crews
          </h1>
          <div className=" flex overflow-x-scroll no-scrollbar ">
            {casts.map((cast) => (
              <div className=" mx-1 md:mx-4 h-28 md:h-40">
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + cast.profile_path}
                  className=" w-12 md:w-44 object-cover rounded-[50%]"
                />
                <p className="flex align-middle font-bold justify-center px-1 md:px-10 w-20 md:w-24 text-sm">
                  {cast.character}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" text-sm md:text-lg  w-[89%] px-1 md:px-12 md:py-2 ">
          <h1 className=" font-bold w-[50%] text-lg md:text-3xl absolute md:static md:mt-0 -mt-[50%]">
            {movieDetails?.title}
          </h1>
          <h2 className="md:inline-block hidden font-bold py-2">
            {movieDetails?.tagline}
          </h2>
          <p className=" flex md:w-full justify-centera w-80 md:py-2 pt-8 ">
            {movieDetails?.overview}
          </p>
          <div className=" flex justify-between ">
            <div className=" flex flex-col ">
              <p className="font-bold md:py-6 py-4 ">
                released on : {movieDetails?.release_date}
              </p>
              <p>average rating: {movieDetails?.vote_average}</p>
              <p className="py-4 md:py-6">
                Language : {movieDetails?.spoken_languages[0].english_name}
              </p>
            </div>

            <p className=" py-4 text-sm md:text-lg">
              Genres :
              {movieDetails?.genres.map((gen) => (
                <p>{gen.name}</p>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetDetail;
