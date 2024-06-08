import React from "react";
import { MOVIE_IMAGE_URL } from "./utils/constants";
import { useDispatch } from "react-redux";
import { addShowMovieDetail } from "./utils/moviesSlice";
import useTrailerVideo from "./hooks/useTrailerVideo";

const MovieCard = ({ posterPath, id, movieName, overview, backdropPoster }) => {
  const movieDe = {
    posterPath,
    id,
    movieName,
    overview,
    posterPath,
    backdropPoster,
  };

  const movieDetails = {};
  const dispatch = useDispatch();
  const fetchMovieDetail = () => {
    dispatch(addShowMovieDetail(movieDe));
  };

  return (
    <div
      onClick={fetchMovieDetail}
      className="  w-28 md:w-48 pr-2 py-2 shadow hover:scale-95 transition-all cursor-pointer"
    >
      <img
        className="rounded-md"
        alt="movie image"
        src={MOVIE_IMAGE_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
