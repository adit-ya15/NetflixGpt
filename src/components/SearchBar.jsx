import React from 'react'
import choosenLanguage from '../Translate/language'
import { useSelector } from 'react-redux'

const SearchBar = () => {

    const selectedLang = useSelector((store) => store.lang.identifier)

    return (
        <div className='bg-linear-to-r from-[#0000007e] to-[#0000007e] w-full h-[855px] absolute top-0'>
            <div className='flex justify-center mt-32'>
                <input type="text" placeholder={choosenLanguage[selectedLang].gptSearchPlaceholder} className='bg-white p-4  w-[50vw] mr-1 rounded-sm'/>
                <button className='bg-[#E50914] rounded-sm p-4 w-[10vw] cursor-pointer'>{choosenLanguage[selectedLang].Search}</button>
            </div>
        </div>
    )
}

export default SearchBar
