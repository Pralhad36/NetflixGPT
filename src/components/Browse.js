import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
import usePopularMovies from './hooks/usePopularMovies'
import useTopRatedMovies from './hooks/useTopRatedMovies'
import useUpcomingMovies from './hooks/useUpcomingMovies'

const Browse = () => {

  const toggleGptView = useSelector((store) => store?.gpt?.showGptSearch)

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()


  return (
    <div className=''>
      <Header />
      {toggleGptView ? <GptSearch /> : <>
        <MainContainer />
        <SecondaryContainer />
      </>}

      {/* {
        MainContainer
          -VideoBackground
          -VideoTitle
        SecondanaryContainer
          -MovieList * n
          -cards * n  
      } */}
    </div>
  )
}

export default Browse