import React from 'react'
import Head from './Head'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRated from '../Hooks/useTopRated'
import useUpcoming from '../Hooks/useUpcoming'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'


const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()
  useTopRated()
  useUpcoming()
  const isGpt = useSelector((store) => store.gpt.isGpt);


  return (
    <>
      <Head />
      {isGpt ? <GptSearch /> : <>
        <MainContainer />
        <SecondaryContainer />
      </>}

      <Footer />
    </>
  )
}

export default Browse
