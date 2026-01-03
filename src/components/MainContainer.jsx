import React from 'react';
import BackGroundVideo from './BackGroundVideo';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.popular);
  if (!movies || movies.length === 0) return <div className="h-screen w-full bg-black"></div>;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <VideoTitle movie={movies[0]} />
      <BackGroundVideo movie={movies[0]} />
    </div>
  );

};

export default MainContainer;