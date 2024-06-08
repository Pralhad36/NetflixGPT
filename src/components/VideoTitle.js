import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const trailerImage = useSelector(
    (store) => store?.movies?.showMovieDetail?.posterPath
  );

  console.log(trailerImage);
  return (
    <div className="  absolute w-screen h-[120%] aspect-video pt-52 md:pt-40 px-8 md:px-14 text-white bg-gradient-to-r from-black">
      <h1 className=" py-4 text-xl w-48 md:text-3xl md:w-4/12 font-bold">
        {title}
      </h1>
      <p className=" hidden md:inline-block text-sm w-4/12">{overview}</p>

      <div>
        <button className=" px-3 py-1 md:px-11 md:py-2 bg-white bg-opacity-70 text-black md:text-lg font-bold rounded-lg mx-0 md:mx-2 my-8 hover:bg-white">
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
