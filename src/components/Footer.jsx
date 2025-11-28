import React from 'react'
import { LANGUAGES_SUPPORTED } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../utils/langSlice';
import choosenLanguage  from '../Translate/language';



const Footer = () => {
    
    const lang = LANGUAGES_SUPPORTED;
    const dispatch = useDispatch();
    const selectedLang = useSelector((store) => store.lang.identifier)

    const handleLang = (e) => {
        dispatch(changeLanguage(e.target.value))
        console.log(e.target.value)
    }
    return (
        <div className='bg-[#161616] h-80 w-full text-[#BABABA] pt-14 pl-36 text-[16px]'>
            <h1 className='#B7B7B7 mb-5'>{choosenLanguage[selectedLang].FooterHeading}</h1>
            <div className='flex flex-col mb-5'>
                <div className='flex gap-56 mb-5 underline'>
                    <a>{choosenLanguage[selectedLang].FAQ}</a>
                    <a>{choosenLanguage[selectedLang].HelpCenter}</a>
                    <a>{choosenLanguage[selectedLang].TermsOfUse} </a>
                    <a>{choosenLanguage[selectedLang].Privacy}</a>
                </div>
                <div className='flex gap-[120px] underline'>
                    <a>{choosenLanguage[selectedLang].CookiePreferences}</a>
                    <a>{choosenLanguage[selectedLang].CorporateInformation}</a>
                </div>
            </div>
            <select value={selectedLang}
                onChange={handleLang}
                className='border border-[#B7B7B7] rounded-sm py-1 px-4'
            >
                {lang.map((lg) => <option key={lg.identifier} value={lg.identifier}>{lg.name}</option>)}
            </select>
        </div>
    )
}

export default Footer
