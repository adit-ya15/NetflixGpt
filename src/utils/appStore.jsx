import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieSlice.js'


const appStore = configureStore({
    
    reducer: {
        user:userReducer,
        movies:movieReducer,
    },
    
});


try {
    
    console.log('Initial Redux store state:', appStore.getState());
} catch (e) {
    
    console.warn('Could not log initial store state', e);
}

export default appStore