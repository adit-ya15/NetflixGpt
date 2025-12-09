import React from 'react'
import MovieList from './MovieList'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useNowPlayingMovies()
  const popularMovies = useSelector((store) => store.movies?.popular); 
  const topRatedMovies = useSelector((store) => store.movies?.topRated); 
  const upcomingMovies = useSelector((store) => store.movies?.upcoming); 
  

  if (!movies || movies.length === 0) return null;

  return (
    <div className=" bg-black ">
      <div className='-mt-82 md:-mt-92  lg:-mt-32 relative z-10 -pb-2'>
      <MovieList title="Now Playing" movies={movies} />
      <MovieList title="Popular Movies" movies={popularMovies} />
      <MovieList title="Top Rated" movies={topRatedMovies} />
      <MovieList title="Upcoming Movies" movies={upcomingMovies} />
      <MovieList title="Horror" movies={movies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
