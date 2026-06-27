
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // fetch trailer video && updating the store with trailer video data
    const trailerVideo = useSelector((store) =>store.movies.trailerVideo);

    const getMovieVideos = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
      const json = await data.json();
        
       console.log("result",json.results);
      const filterData = json.results.filter((video) => video.type === "Trailer") || json.results.filter((video) => video.type === "Teaser")
                          
      console.log("filterdata",filterData);
      const trailer = filterData.length ? filterData[0] : json.results[0];
      //console.log("trailer",trailer);
   
     if(trailer) {  // ✅ only dispatch if something found
    dispatch(addTrailerVideo(trailer));
}
  
    };
  
    useEffect(() => {
      if(!trailerVideo)
      getMovieVideos();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);
}

export default useMovieTrailer