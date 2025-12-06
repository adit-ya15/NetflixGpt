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
    
    // We need geminiNames to check the condition for CSS
    const { movieResults, geminiNames } = useSelector(store => store.gpt)
    
    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        return json.results
    }

    const getGeminiMovies = async () => {

        dispatch(setLoading(true))

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
        }
    }

    return (
        <div className={`bg-linear-to-r from-[#0000007e] to-[#0000007e] w-full absolute top-0 ${geminiNames ? "min-h-[2030px]" : "min-h-[679px]"}`}>
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