import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import Netflix from '../utils/img/Netflix.jpg'

const GptSearch = () => {
  return (
    <div>
       <div className="fixed -z-10">
                <img src={Netflix} alt="background" />
            </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch