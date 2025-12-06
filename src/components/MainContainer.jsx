import React, { useMemo } from 'react'; 
import BackGroundVideo from './BackGroundVideo';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.popular);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <VideoTitle movie={movies[0]} />
      <BackGroundVideo movie={movies[0]} />
    </div>
  );
  
};

export default MainContainer;