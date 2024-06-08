import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "./utils/moviesSlice";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  const backdrop_poster = useSelector(
    (store) => store?.movies?.showMovieDetail?.backdropPoster
  );
  const dispatch = useDispatch();

  console.log(movieId);

  // { clickedMovie ? movieId = clickedMovie : movieId }

  // const currentMovieId = clickedMovie ? clickedMovie : movieId;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
    },
  };

  //fetching trailer video.
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      options
    );

    const json = await data?.json();

    console.log(json);

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    console.log(filteredData);

    const trailer = filteredData ? filteredData[0] : json.results[0];

    console.log(trailer);

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, [movieId]);

  return (
    <div className=" pt-40 md:pt-0">
      {trailerVideo ? (
        <iframe
          className=" w-screen aspect-video"
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
