import React, { useState } from 'react'
import choosenLanguage from '../Translate/language'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GEMINI_API_KEY } from '../utils/constants';
import { addGeminiMovies, setLoading } from '../utils/GptSlice'

const SearchBar = () => {

    const selectedLang = useSelector((store) => store.lang.identifier)
    const [inputText, setInputText] = useState("");
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const dispatch = useDispatch();
    
    
    const { geminiNames, isLoading } = useSelector(store => store.gpt);
    
    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        return json.results
    }

    const getGeminiMovies = async () => {

        dispatch(setLoading(true))
        console.log("Current Key:", import.meta.env.VITE_GEMINI_API_KEY);

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            const prompt = `Recommend 5 movies for a user who wants: "${inputText}".
                            Return STRICTLY a JSON array of strings. 
                            Do not include years, descriptions, or markdown formatting.
                            Example output: ["Inception", "Interstellar", "The Matrix"]
                            `;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            const cleanJson = text.replace(/```json|```/g, '').trim();
            const movieNames = JSON.parse(cleanJson);

            console.log("Movie Names from Gemini:", movieNames);
            const promiseArray = movieNames.map((movie) => searchMovieTMDB(movie))
            
            const tmdbResults = await Promise.all(promiseArray)
            console.log(tmdbResults)
            dispatch(addGeminiMovies({geminiNames: movieNames, movieResults: tmdbResults}))

        } catch (error) {
            console.error("Error getting suggestions:", error);
            dispatch(setLoading(false));
        }
    }
    const shouldAllowScroll = geminiNames;
    return (
        <div className='bg-linear-to-r from-[#0000007e] to-[#0000007e] w-full absolute top-0 h-[800px] sm:h-[910px] md:h-[1230px] lg:h-[910px] z-10'>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-1 mt-20 sm:mt-32 px-2 sm:px-0'>
                <input 
                    type="text" 
                    placeholder={choosenLanguage[selectedLang].gptSearchPlaceholder}
                    onChange={(e) => setInputText(e.target.value)}
                    className='bg-white p-3 sm:p-4 w-full sm:w-96 md:w-[50vw] lg:w-[45vw] rounded-sm text-sm sm:text-base'
                />
                <button 
                    className='bg-[#E50914] rounded-sm p-3 sm:p-4 w-full sm:w-24 md:w-28 lg:w-32 cursor-pointer font-semibold text-sm sm:text-base'
                    onClick={() => getGeminiMovies()}
                >
                    {choosenLanguage[selectedLang].Search}
                </button>
            </div>
        </div>
    )
}

export default SearchBar