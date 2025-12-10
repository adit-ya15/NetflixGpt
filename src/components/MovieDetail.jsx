import React, { use } from 'react'
import VideoBackground from './VideoBackground'
import { useParams } from 'react-router'

const MovieDetail = () => {
  const id = useParams().id
  return (
    <div>
      <VideoBackground  movieId={id}/>
    </div>
  )
}

export default MovieDetail
