import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import HorizontalScrollContainer from "./HorizontalScrollContainer";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-4 flex flex-col">
      <h1 className="text-lg md:text-2xl pt-2 md:pt-6">{title}</h1>
      <HorizontalScrollContainer>
        <div className=" inline-flex whitespace-nowrap overflow-x-scroll no-scrollbar ">
          {/* <div className=" bg-white flex"> */}
            {movies?.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                movieName={movie?.title}
                overview={movie?.overview}
                backdropPoster={movie?.backdrop_path}
                posterPath={movie.poster_path}
              />
            ))}
          {/* </div> */}
        </div>
      </HorizontalScrollContainer>
    </div>
  );
};

export default MoviesList;
