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
    <div className=" bg-black min-h-screen ">
      <div className='-mt-82 md:-mt-92  lg:-mt-32 relative z-10 -pb-2'>
      <section id="nowPlaying"> 
          <MovieList title="Now Playing" movies={movies} />
      </section>
      <section id="popularMovies"> 
          <MovieList title="Popular Movies" movies={popularMovies} />
      </section>
      <section id="topRated"> 
          <MovieList title="Top Rated" movies={topRatedMovies} />
      </section>
      <section id="upcomingMovies"> 
          <MovieList title="Upcoming Movies" movies={upcomingMovies} />
      </section>
      <section id="horror"> 
          <MovieList title="Horror" movies={movies} />
      </section>
      </div>
    </div>
  )
}

export default SecondaryContainer
