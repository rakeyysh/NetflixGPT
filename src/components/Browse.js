
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainConatiner from './MainConatiner';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
        <Header/>
       {/*
       
        MainContainer
         - VideoBackground
         - VideoTitle

         SecondaryContainer
         - MovieList * n
          - cards * n
      
       
       
       */}

       <MainConatiner/>
       <SecondaryContainer/>
    </div>
  )
}

export default Browse;