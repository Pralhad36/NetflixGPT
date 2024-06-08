import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const backdropPoster = useSelector(
    (store) => store.movies?.nowPlayingMovies?.backdrop_path
  );
  const clickedMovieId = useSelector(
    (store) => store?.movies?.showMovieDetail?.id
  );
  const clickedMovieTitle = useSelector(
    (store) => store?.movies?.showMovieDetail?.movieName
  );
  const clickedMovieOverview = useSelector(
    (store) => store?.movies?.showMovieDetail?.overview
  );

  const showMovieDetailId = useSelector(
    (store) => store?.movies?.showMovieDetail?.id
  );
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  const currentMovieId = clickedMovieId ? clickedMovieId : id;
  const currentMovieTitle = clickedMovieTitle
    ? clickedMovieTitle
    : original_title;
  const currentMovieOverview = clickedMovieOverview
    ? clickedMovieOverview
    : overview;

  return (
    <div className="">
      <VideoTitle title={currentMovieTitle} overview={currentMovieOverview} />
      <VideoBackground
        movieId={currentMovieId}
        backdropPoster={backdropPoster}
      />
    </div>
  );
};

export default MainContainer;
