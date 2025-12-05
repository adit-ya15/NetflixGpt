import React, { useState } from 'react'
import choosenLanguage from '../Translate/language'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from '../utils/constants';
import { addGeminiMovies } from '../utils/GptSlice';

const SearchBar = () => {

    const selectedLang = useSelector((store) => store.lang.identifier)
    const [inputText, setInputText] = useState("");
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const dispatch =useDispatch();
    
    const getGeminiMovies = async () => {
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            const prompt = `Recommend 5 movies for a user who wants: "${inputText}".
                            Return STRICTLY a JSON array of strings. 
                            Do not include years, descriptions, or markdown formatting.
                            Example output: ["Inception", "Interstellar", "The Matrix"]
                            `
                            ;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            const cleanJson = text.replace(/```json|```/g, '').trim();
            const movieNames = JSON.parse(cleanJson);

            console.log("Movie Names from Gemini:", movieNames);
            dispatch(addGeminiMovies(movieNames))

        } catch (error) {
            console.error("Error getting suggestions:", error);
        }
    }

return (
    <div className='bg-linear-to-r from-[#0000007e] to-[#0000007e] w-full h-[855px] absolute top-0'>
        <div className='flex justify-center mt-32'>
            <input type="text" placeholder={choosenLanguage[selectedLang].gptSearchPlaceholder}
                onChange={(e) => setInputText(e.target.value)}
                className='bg-white p-4  w-[50vw] mr-1 rounded-sm'
            />
            <button className='bg-[#E50914] rounded-sm p-4 w-[10vw] cursor-pointer'
                onClick={() => getGeminiMovies()}
            >{choosenLanguage[selectedLang].Search}</button>
        </div>
    </div>
)
}

export default SearchBar
