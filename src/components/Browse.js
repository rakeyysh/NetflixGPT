
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainConatiner from './MainConatiner';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

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