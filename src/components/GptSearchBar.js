import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';


const GptSearchBar = () => {

 const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);


   // search movie in TMDB
   const searchMovieTMDB = async (movie) =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+movie,API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };





  const handleGPTSearchClick = async () => {
    // console.log(searchText.current.value);

    // Make an API call to GPT API and get Movie Results

    const gptQuery = `Act as a Movie Recommendation system. 
    Suggest 5 movies based on the user's input. 
    Only return movie names in a comma-separated format.
    Example: Don, Sholay, Swades, F1, Nayak`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-pro:generateContent?key=${process.env.REACT_APP_GEMINI_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: gptQuery },
                { text: searchText.current.value }
              ]
            }
          ]
        }),
      }
    );
  
    const data = await response.json();
    // console.log(data);
    const result = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    const geminiMovies = data?.candidates?.[0]?.content?.parts?.[0]?.text.split(",");



    // [Golmaal,Jaane Bhi Do Yaaro,Chupke Chupke,Angoor,Padosan]   using split

    // For each movie I will search TMDB API

    
       const promiseArray = geminiMovies.map((movie) =>searchMovieTMDB(movie));
       // [Promise,Promise,Promise,Promise,Promise] all in Pending state becoz of asynchronous nature of JS


       const tmdbResults = await Promise.all(promiseArray);
      
       dispatch(addGptMovieResults({movieNames:geminiMovies,movieResults:tmdbResults}));
       console.log(tmdbResults);

       
        

    
  
    // console.log("Gemini result:", result);

  }

  console.log(langKey);
  return (
    <div className='pt-[45%] md:pt-[10%]  flex justify-center '>
      <form
        className='bg-black w-full md:w-1/2 grid grid-cols-12'
        onSubmit={(e) => e.preventDefault()}  // to prevent inbuit form submission in forms
      >
        <input ref={searchText} type='text' className='p-4 m-4 col-span-9 ' placeholder={lang[langKey].gptSearchPlaceholder}></input>
        <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>


      </form>


    </div>
  )
}

export default GptSearchBar