import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);

  return (
    <div className='bg-black'>
    <div className='-mt-60 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"India"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
    
     {/* 

       MovieList - Popular
         - MovieCards * n


       MovieList - Now Playing
       MovieList - Trending
       MovieList - Horror
     
     
     
     
     
     
     */}
   



    </div>
    </div>
  )
}

export default SecondaryContainer