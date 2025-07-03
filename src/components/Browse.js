
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainConatiner from './MainConatiner';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();


   {/*
       
        MainContainer
         - VideoBackground
         - VideoTitle

         SecondaryContainer
         - MovieList * n
          - cards * n
      
       
       
       */}
  return (
    <div>
        <Header/>

        {

          showGptSearch ? 
        (
        <GptSearch/>
        ) : (
      
      <>
       <MainConatiner/>
       <SecondaryContainer/>
       </>
       
        )
      }
    </div>
  )
}

export default Browse;