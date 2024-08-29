import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import SearchVideoTitle from "./SearchVideoTitle";
import SearchVideoBackground from "./SearchVideoBackground";

const GptMovieSuggestion = () => {
  const searchMovies = useSelector((store) => store.movies?.searchMovies);
  console.log(searchMovies);

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

  const { title, overview, id } = mainMovie;

  const currentMovieId = clickedMovieId ? clickedMovieId : id;
  const currentMovieTitle = clickedMovieTitle ? clickedMovieTitle : title;
  const currentMovieOverview = clickedMovieOverview
    ? clickedMovieOverview
    : overview;

  if (!searchMovies) return;

  return (
    <div className=" w-screen justify-start mx-auto text-white mt-4 flex flex-wrap bg-black bg-opacity-85 ">
      {showMovieDetailId && (
        <div className=" flex ">
          {/* <SearchVideoTitle
            title={currentMovieTitle}
            movieId={currentMovieId}
            overview={currentMovieOverview}
          /> */}
          <SearchVideoBackground
            movieId={currentMovieId}
            backdropPoster={backdropPoster}
          />
        </div>
      )}
      {searchMovies.map((movie) =>
        movie.poster_path ? (
          <div className=" flex    ">
            <MovieCard
              key={movie.id}
              id={movie.id}
              movieName={movie?.title}
              overview={movie?.overview}
              backdropPoster={movie?.backdrop_path}
              posterPath={movie.poster_path}
            />
          </div>
        ) : null
      )}
    </div>
  );
};

export default GptMovieSuggestion;
