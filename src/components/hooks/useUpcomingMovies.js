import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upComingMovies = useSelector((store) => store?.movies?.upComingMovies);

  const getUpcomingMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
      },
    };
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      options
    );

    const json = await data?.json();

    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    !upComingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
