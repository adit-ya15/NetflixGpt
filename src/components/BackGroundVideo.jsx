import React from 'react';
import useMovie from '../Hooks/useMovie';

const BackGroundVideo = ({ movie }) => {
  const trailer = useMovie(movie?.id);
  console.log(movie.id)

  if (!trailer) return null;

  const youtubeUrl = `https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&loop=1&controls=0&playlist=${trailer}&modestbranding=1&rel=0&showinfo=0`;

  return (
    <div className="absolute left-0 w-full h-screen -z-10 overflow-hidden">
      <iframe
        className="w-full h-full scale-130 pointer-events-none"
        src={youtubeUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media;"
      />
    </div>
  );
};

export default BackGroundVideo;
