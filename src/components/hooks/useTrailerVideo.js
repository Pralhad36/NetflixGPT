import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    //fetching trailer video.
    const getMovieVideo = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
            API_OPTION
        );

        const json = await data?.json();


        const filteredData = json.results.filter(
            (video) => video.type === "Trailer"
        );

        const trailer = filteredData.length ? filteredData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovieVideo();
    }, []);
}

export default useTrailerVideo