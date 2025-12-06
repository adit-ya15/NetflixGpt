import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import Shimmer from './Shimmer';

const MovieSuggestions = () => {
  
  const { movieResults, geminiNames,isLoading } = useSelector(store => store.gpt)
  
  if(isLoading) return <Shimmer />;
  if (!geminiNames) return null;
  

  return (
    <div className='p-4 m-4 bg-black bg-opacity-90 text-white rounded-lg w-full md:w-[60vw] absolute top-48 left-0 right-0 mx-auto z-50 bg-fixed'>
      {geminiNames.map((movie, index) => (
        <MovieList 
            key={movie} 
            title={movie} 
            movies={movieResults[index]} 
        />
      ))}
    </div>
  )
}

export default MovieSuggestions