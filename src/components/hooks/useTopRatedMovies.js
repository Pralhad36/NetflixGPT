import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);

  const getTopRatedMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
      },
    };
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options
    );

    const json = await data?.json();

    dispatch(addTopRatedMovies(json?.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
