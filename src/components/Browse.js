import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
import GetDetail from "./GetDetail";

const Browse = () => {
  const toggleGptView = useSelector((store) => store?.gpt?.showGptSearch);

  const movieCastDetail = useSelector(
    (store) => store?.movies?.movieCasteDetails
  );

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="">
      <Header />
      {toggleGptView ? (
        <GptSearch />
      ) : (
        <>
          {!movieCastDetail ? (
            <div>
              <MainContainer />
              <SecondaryContainer />
            </div>
          ) : (
            <GetDetail />
          )}
        </>
      )}

      {/* {
        MainContainer
          -VideoBackground
          -VideoTitle
        SecondanaryContainer
          -MovieList * n
          -cards * n  
      } */}
    </div>
  );
};

export default Browse;
