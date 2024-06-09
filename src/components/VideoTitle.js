import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const trailerImage = useSelector(
    (store) => store?.movies?.showMovieDetail?.posterPath
  );

  console.log(trailerImage);
  return (
    <div className="  absolute w-screen h-[120%] aspect-video pt-60 md:pt-40 px-8 md:px-14 text-white bg-gradient-to-r from-black">
      <h1 className=" py-2 text-md w-28 md:text-3xl md:w-4/12 font-bold text-gray-400">
        {title}
      </h1>
      <p className=" hidden md:inline-block text-sm w-4/12 text-gray-200">
        {overview}
      </p>

      <div>
        <button className=" px-2 py-0 md:px-11 md:py-2 bg-white bg-opacity-70 text-black md:text-lg font-bold rounded-lg mx-0 md:mx-2 mt-2  hover:bg-white">
          Play
        </button>
        <button className=" hidden md:inline-block px-7 py-2 bg-gray-500 text-white font-bold text-lg  rounded-lg  my-8 bg-opacity-50 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
