import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        isGpt:false,
        isLoading:false,
        geminiNames:null,
        movieResults:null
    },
    reducers:{
        toggleGpt:(state) => {
            state.isGpt = !state.isGpt;
        },
        addGeminiMovies:(state,action) => {
            const { geminiNames, movieResults} = action.payload
            state.geminiNames = geminiNames
            state.movieResults = movieResults
            state.isLoading = false
        },
        setLoading: (state, action) => { 
             state.isLoading = action.payload;
        },
        clearGptMovieResults: (state) => {
            state.geminiNames = null;
            state.movieResults = null;
            state.isGpt = false;
        }
    }
})

export const {toggleGpt,addGeminiMovies,setLoading,clearGptMovieResults} = GptSlice.actions; 
export default GptSlice.reducer;