import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ movie }) => {
  const [showOverview, setShowOverview] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowOverview(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute top-0 left-0 h-screen flex flex-col justify-center pl-12 text-white bg-linear-to-r from-black/80 to-transparent z-10">
      <h1 className="md:text-6xl text-3xl font-extrabold w-[40%] drop-shadow-xl md:block hidden md:-mt-62 lg:mt-0">
        {movie?.original_title}
      </h1>

      {showOverview && (
        <p className="mt-4 text-lg w-[35%] opacity-90 hidden lg:block">
          {movie?.overview}
        </p>
      )}

      <div className=" mt-1 sm:mt-6 md:flex gap-1 sm:gap-4 hidden ">

        <button className="
          px-6 py-3 bg-white text-black rounded-md text-lg font-semibold 
        hover:bg-gray-200 transition 
          flex items-center gap-3
          shadow-md hover:shadow-lg
          transform hover:scale-105
        ">
          <FontAwesomeIcon icon={faPlay} className="text-black text-xl" />
          Play
        </button>

        <button className="
          px-6 py-3 bg-gray-500/70 text-white rounded-md text-lg font-semibold 
        hover:bg-gray-600 transition 
          flex items-center gap-3
          shadow-md hover:shadow-lg
          transform hover:scale-105
          backdrop-blur-md
        ">
          <FontAwesomeIcon icon={faCircleInfo} className="text-white text-xl" />
          More Info
        </button>

      </div>
    </div>
  );
};

export default VideoTitle;
