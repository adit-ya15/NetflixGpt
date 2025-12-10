import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router'

const MovieList = ({ title, movies }) => {
  return (
    <div className='px-0 md:px-6 [&::-webkit-scrollbar]:hidden z-50 '>
      <h1 className="text-2xl font-bold text-white mb-4 [&::-webkit-scrollbar]:hidden">
        {title}
      </h1>

      <div className="flex overflow-x-scroll movie-row md:gap-4 pb-4 [&::-webkit-scrollbar]:hidden">
        {movies?.map((movie) => (
          <Link to={`/details/${movie.id}`} key={movie.id}><MovieCard imageId={movie?.poster_path} key={movie.id} /></Link>
        ))}
      </div>
    </div>
  )
}

export default MovieList
