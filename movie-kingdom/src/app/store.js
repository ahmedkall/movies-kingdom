import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import  genreOrCategoryReducer  from "../features/currentGenreOrCategory";
import userReducer from "../features/authentication";


export default configureStore({
    reducer:{
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        currentGenreOrCategory : genreOrCategoryReducer,
        user: userReducer,
    }

});