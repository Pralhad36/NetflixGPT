import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { MOVIE_IMAGE_URL } from "./utils/constants";
import MoviesList from "./MoviesList";
import HorizontalScrollContainer from "./HorizontalScrollContainer";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );

  const popularMovies = useSelector((store) => store?.movies?.popularMovies);

  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);

  return (
    <div className=" bg-black text-white ">
      <div className=" px-2 relative md:z-10 pt-[70%] md:pt-0 md:-mt-80 md:bg-transperant ">
        <MoviesList title={"Now playing"} movies={nowPlayingMovies} />
        <MoviesList title={"Popular"} movies={popularMovies} />
        <MoviesList title={"Top Rated"} movies={topRatedMovies} />
        <MoviesList title={"Upcoming"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
