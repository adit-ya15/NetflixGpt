import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import Shimmer from './Shimmer';

const MovieSuggestions = () => {

  const { movieResults, geminiNames, isLoading } = useSelector(store => store.gpt)

  if (isLoading) return <Shimmer />;
  if (!geminiNames) return null;


  return (
    <div
      className='p-2 sm:p-4 m-2 sm:m-4 bg-black bg-opacity-90 
    text-white rounded-lg w-[calc(100%-1rem)] sm:w-96 md:w-[66vw] 
    lg:w-[54vw] absolute top-48 left-0 right-0 mx-auto z-50 bg-fixed 
    max-h-[60vh] sm:max-h-[700px] overflow-y-auto lg:ml-89 [&::-webkit-scrollbar]:hidden
    md:ml-35
    '
    
    >
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