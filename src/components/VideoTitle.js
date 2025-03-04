import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovieCastDetails, addMovieDetails } from "./utils/moviesSlice";

const VideoTitle = ({ movieId, title, overview }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [casts, setCasts] = useState([]);
  const trailerImage = useSelector(
    (store) => store?.movies?.showMovieDetail?.posterPath
  );

  const getCastDetails = async (movieId) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjhlYzUwOTM4NWJjOTBhYjg3NWI5ODlmOWNjYzNjMSIsInN1YiI6IjY2NjE1OWE4NmRjMjgwM2M5YjhkN2Q4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Osg_i22fPpliVVbXjQHvBjPjMMa__xxU26BwSeOrd-o",
      },
    };
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/credits?language=en-US",
      options
    );

    const json = await data.json();

    console.log(json.cast);
    const casts = json.cast;
    dispatch(addMovieCastDetails(casts));
  };

  const getMovieDetails = async (movieId) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjhlYzUwOTM4NWJjOTBhYjg3NWI5ODlmOWNjYzNjMSIsInN1YiI6IjY2NjE1OWE4NmRjMjgwM2M5YjhkN2Q4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Osg_i22fPpliVVbXjQHvBjPjMMa__xxU26BwSeOrd-o",
      },
    };
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      options
    );

    const json = await data.json();

    console.log(json);
    const movieDetails = json;
    dispatch(addMovieDetails(movieDetails));
  };

  const imageHandler = () => {
    // navigate("/movieDetail");
    getCastDetails(movieId);
    getMovieDetails(movieId);
  };

  // useEffect(() => {
  //   getMovieDetails(movieId);
  // }, [movieId]);

  // const firstFiveImage = images.filter((image) => )
  return (
    <div className="fixed z-40 md:z-10 flex flex-col    md:absolute w-[100%] md:h-[140%] h-[40.4%] aspect-video pt-56 md:pt-80 px-8 md:px-12">
      <h1 className=" px-2 md:py-2 text-md md:w-96 md:text-3xl   font-bold text-gray-200 bg-gradient-to-r from-black">
        {title}
      </h1>
      {/* <p className=" hidden md:inline-block text-md p-2 w-8/12 text-gray-200 bg-gradient-to-r from-black">
        {overview}
      </p> */}

      <div className=" ">
        <button className=" mr-2 px-2 py-0 md:px-10 md:py-2 bg-white bg-opacity-70 text-black md:text-lg text-xs font-bold rounded-lg mx-0 md:mt-2 mt-4  hover:bg-white">
          Play
        </button>
        <button
          onClick={imageHandler}
          className="inline-block md:px-7 px-2 md:py-2 bg-gray-500 text-white font-bold md:text-lg text-xs  rounded-lg  md:my-8 bg-opacity-50 hover:bg-opacity-80"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
