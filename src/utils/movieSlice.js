import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlaying:null,
        popular:null,
        topRated:null,
        upcoming:null,
        movieDetail:null,
    },
    reducers:{
        addnowPlaying:(state,action) => {
            state.popular = action.payload;
        },
        addPopular:(state,action) => {
            state.popular = action.payload;
        },
        addTopRated:(state,action) => {
            state.topRated = action.payload;
        },
        addUpcoming:(state,action) => {
            state.upcoming = action.payload;
        },
        addMovieDetail:(state,action) => {
            state.movieDetail = action.payload
        }
    }

})


export const {addPopular,addTopRated,addUpcoming,addnowPlaying,addMovieDetail} = movieSlice.actions
export default movieSlice.reducer