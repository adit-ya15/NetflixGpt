import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestions from './MovieSuggestions'
import { loginPageBackgroundImage } from '../utils/constants'

const GptSearch = () => {
    return (
        <div>
            <div className='bg-cover bg-center'>
                <img src={loginPageBackgroundImage} alt="background image" />
            </div>
            <SearchBar />
            <MovieSuggestions />
        </div>
    )
}

export default GptSearch
