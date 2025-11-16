import React from 'react'
import { useState } from 'react'

const Footer = () => {
    const [language, setLanguage] = useState('English');
    return (
        <div className='bg-[#161616] h-80 w-full text-[#BABABA] pt-14 pl-36 text-[16px]'>
            <h1 className='#B7B7B7 mb-5'>Questions? Call 000-800-919-1743 (Toll-Free)</h1>
            <div className='flex flex-col mb-5'>
                <div className='flex gap-56 mb-5 underline'>
                    <a>FAQ</a>
                    <a>Help Center</a>
                    <a>Terms of use </a>
                    <a>Privacy</a>
                </div>
                <div className='flex gap-[120px] underline'>
                    <a>Cookie Preferences</a>
                    <a>Corporate Information</a>
                </div>
            </div>
            <select value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className='border border-[#B7B7B7] rounded-sm py-1 px-4'
            >

                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
            </select>
        </div>
    )
}

export default Footer
