import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestions from './MovieSuggestions'
import { loginPageBackgroundImage } from '../utils/constants'
import { useSelector } from 'react-redux'

const GptSearch = () => {

    const { geminiNames } = useSelector(store => store.gpt)

    return (
        <div>
            <div className='bg-cover bg-center min-h-[655px]'>
                <img src={loginPageBackgroundImage} alt="background image" className='h-[676px] w-full'/>
                {geminiNames && <div>
                    <img src={loginPageBackgroundImage} alt="background image" className='h-[676px] w-full' />
                <img src={loginPageBackgroundImage} alt="background image" className='h-[679px] w-full' />
                </div>}

            </div>
            <SearchBar />
            <MovieSuggestions />
        </div>
    )
}

export default GptSearch
