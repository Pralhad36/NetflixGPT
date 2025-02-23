import React, { useEffect } from "react";

const GetMovie = () => {
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWE2MWViNGZjNDkwN2UyNjAxYjllNTZlNjgyZWM4NiIsInN1YiI6IjY2NjE1OWE4NmRjMjgwM2M5YjhkN2Q4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F6dh0YGhLTeugCyILzcqo1eG0y3yNCuPNaWAGr6umT8",
      },
    };

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const json = await data.json();

    console.log(json);
  };
  return <div>GetMovie</div>;
};

export default GetMovie;
