import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "./utils/moviesSlice";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  const backdrop_poster = useSelector(
    (store) => store?.movies?.showMovieDetail?.backdropPoster
  );
  const dispatch = useDispatch();

  // { clickedMovie ? movieId = clickedMovie : movieId }

  // const currentMovieId = clickedMovie ? clickedMovie : movieId;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjhlYzUwOTM4NWJjOTBhYjg3NWI5ODlmOWNjYzNjMSIsInN1YiI6IjY2NjE1OWE4NmRjMjgwM2M5YjhkN2Q4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Osg_i22fPpliVVbXjQHvBjPjMMa__xxU26BwSeOrd-o",
    },
  };

  //fetching trailer video.
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      options
    );

    const json = await data?.json();

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filteredData ? filteredData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, [movieId]);

  return (
    <div className="md:static  z-30 fixed pt-20  md:pt-0 w-screen">
      {trailerVideo ? (
        <iframe
          className=" w-screen  aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1&mute=1&loop=1"
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ) : (
        <div>
          <img
            className=" w-screen"
            alt="backdrop poster"
            src={"https://image.tmdb.org/t/p/w500/" + backdrop_poster}
          />
        </div>
      )}
    </div>
  );
};

// useTrailerVideo(movieId);

export default VideoBackground;
