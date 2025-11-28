import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieSlice.js'
import GptReducer from './GptSlice.jsx'
import langReducer from './langSlice.jsx'


const appStore = configureStore({
    
    reducer: {
        user:userReducer,
        movies:movieReducer,
        gpt:GptReducer,
        lang:langReducer,
    },
    
});

export default appStore