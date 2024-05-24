import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTION } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming",
            API_OPTION
        );

        const json = await data?.json();

        dispatch(addUpcomingMovies(json?.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);
};

export default useUpcomingMovies;