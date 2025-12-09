import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className='px-0 md:px-6'>
      <h1 className="text-2xl font-bold text-white mb-4">
        {title}
      </h1>

      <div className="flex overflow-x-scroll movie-row md:gap-4 pb-4">
        {movies?.map((movie) => (
          <MovieCard imageId={movie?.poster_path} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
