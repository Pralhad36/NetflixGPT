import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  // { clickedMovie ? movieId = clickedMovie : movieId }

  // const currentMovieId = clickedMovie ? clickedMovie : movieId;

  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  //fetching trailer video.
  const getMovieVideo = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
      },
    };
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTION
    );

    const json = await data?.json();

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    console.log(filteredData);

    const trailer = filteredData?.length ? filteredData[0] : json.results[0];

    console.log(trailer);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useTrailerVideo;
