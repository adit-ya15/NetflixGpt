import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        isGpt:false
    },
    reducers:{
        toggleGpt:(state) => {
            state.isGpt = !state.isGpt;
        }
    }
})

export const {toggleGpt} = GptSlice.actions; 
export default GptSlice.reducer;