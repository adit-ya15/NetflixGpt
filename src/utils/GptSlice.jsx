import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        isGpt:false,
        geminiMovies:[]
    },
    reducers:{
        toggleGpt:(state) => {
            state.isGpt = !state.isGpt;
        },
        addGeminiMovies:(state,action) => {
            state.geminiMovies = action.payload
        }
    }
})

export const {toggleGpt,addGeminiMovies} = GptSlice.actions; 
export default GptSlice.reducer;