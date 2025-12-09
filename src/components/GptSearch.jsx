import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestions from './MovieSuggestions'
import { loginPageBackgroundImage } from '../utils/constants'
import { useSelector } from 'react-redux'

const GptSearch = () => {

    

    return (
        <div className='w-full'>
            <div className='bg-cover bg-center w-full h-[800px] sm:h-[910px] md:h-[1230px] lg:h-[910px] overflow-hidden'>
                <img src={loginPageBackgroundImage} alt="background image" className='w-full h-full object-cover'/>
            </div>
            <SearchBar />
            <MovieSuggestions />
        </div>
    )
}

export default GptSearch
