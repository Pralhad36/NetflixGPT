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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjhlYzUwOTM4NWJjOTBhYjg3NWI5ODlmOWNjYzNjMSIsInN1YiI6IjY2NjE1OWE4NmRjMjgwM2M5YjhkN2Q4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Osg_i22fPpliVVbXjQHvBjPjMMa__xxU26BwSeOrd-o",
      },
    };
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&region=IN&with_original_language=hi&page=1",
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
