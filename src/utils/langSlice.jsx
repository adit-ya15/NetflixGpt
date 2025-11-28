import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name:"lang",
    initialState:{
        identifier:"en",
    },
    reducers:{
        changeLanguage: (state,action) => {
            state.identifier = action.payload;
        }
    }
})

export const {changeLanguage} = langSlice.actions
export default langSlice.reducer