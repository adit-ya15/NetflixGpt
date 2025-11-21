import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        popular:null,
        topRated:null,
        upcoming:null,
    },
    reducers:{
        addPopular:(state,action) => {
            state.popular = action.payload;
        },
        addTopRated:(state,action) => {
            state.topRated = action.payload;
        },
        addUpcoming:(state,action) => {
            state.upcoming = action.payload;
        }
    }

})


export const {addPopular,addTopRated,addUpcoming} = movieSlice.actions
export default movieSlice.reducer