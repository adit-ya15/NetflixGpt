import React from 'react';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import BackGroundVideo from './BackGroundVideo';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useNowPlayingMovies();
  if (movies.length === 0) return null;

  const index = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[index];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <VideoTitle movie={randomMovie} />
      <BackGroundVideo movie={randomMovie} />
    </div>
  );
};

export default MainContainer;
