import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainConatiner = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies == null) return;
    console.log("movies",movies);
    const mainMovie  = movies[4];
    if (!mainMovie) return null;
    // console.log(mainMovie);
    
   const{original_title,overview,id} = mainMovie;
    return (
        <div className='relative w-screen aspect-video bg-black'>
             <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainConatiner;

