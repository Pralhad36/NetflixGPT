import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTION } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upComingMovies = useSelector((store) => store?.movies?.upComingMovies);

  const getUpcomingMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjhlYzUwOTM4NWJjOTBhYjg3NWI5ODlmOWNjYzNjMSIsInN1YiI6IjY2NjE1OWE4NmRjMjgwM2M5YjhkN2Q4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Osg_i22fPpliVVbXjQHvBjPjMMa__xxU26BwSeOrd-o",
      },
    };
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&region=IN&with_original_language=hi&page=1",
      API_OPTION
    );

    const json = await data?.json();

    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    !upComingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
