import React from "react";
import { IMAGE_URL_W200 } from "../utils/constants";

const MovieCard = ({ imageId, title }) => {
  if (!imageId) return null;

  return (
    <div
      className="
        relative w-40 md:w-48 flex-shrink-0
        transition-transform duration-300 ease-out
        hover:scale-110 hover:z-20 
      "
    >
      {/* Added bg-gray-800 to prevent layout shift before image loads */}
      <div className="relative rounded-md overflow-hidden bg-gray-800 aspect-[2/3]">
        <img
          src={IMAGE_URL_W200 + imageId}
          alt={title || "movie poster"}
          loading="lazy"         // 1. PERFORMANCE: Lazy loads images off-screen
          width="200"            // 2. CLS: Helps browser reserve space
          height="300"
          className="w-[90%] md:w-full h-full object-cover rounded-md"
        />

        <div
          className="
            absolute inset-0 
            bg-gradient-to-t from-black/70 to-transparent 
            opacity-0 hover:opacity-100
            transition-opacity duration-300 ease-out
            flex items-end p-2 gap-2
          "
        >
          {/* 3. ACCESSIBILITY: Added aria-label to fix lighthouse errors */}
          <button
            aria-label="Play"
            className="bg-white rounded-full p-1 transition-transform duration-300 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          <button
            aria-label="Add to list"
            className="border border-white rounded-full p-1 transition-transform duration-300 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
              <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
            </svg>
          </button>

          <button
            aria-label="Like"
            className="border border-white rounded-full p-1 transition-transform duration-300 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
              <path d="M9 22H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h4v13zm2-13 4.34-8.68A2 2 0 0 1 17.16 0H18a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-6V9z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;