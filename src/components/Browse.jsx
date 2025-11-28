import React from 'react'
import Head from './Head'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRated from '../Hooks/useTopRated'
import useUpcoming from '../Hooks/useUpcoming'
import Footer from './Footer'


const Browse = () => {

  usePopularMovies()
  useTopRated()
  useUpcoming()


  return (
    <>
      <Head />
      <MainContainer />
      <SecondaryContainer />
      <Footer />
    </>
  )
}

export default Browse
