import { createSlice } from "@reduxjs/toolkit";
export const genreOrCategory = createSlice({
    name: 'genreOrCategory',
    initialState:{
        genreIdOrCategoryName: '',
        page:1 ,
<<<<<<< HEAD
        searchQuery: '',
=======
>>>>>>> af2192a6a13c1796025f12304b79a8a35dd50524
    },
    reducers   :{
        selectGenreOrCategory: (state,action) => { 
            state.genreIdOrCategoryName=action.payload;
<<<<<<< HEAD
            state.searchQuery='';
        },
        searchMovie: (state,action) => {
            state.searchQuery= action.payload;
        } 
=======

        },
>>>>>>> af2192a6a13c1796025f12304b79a8a35dd50524
    }

});

export const {selectGenreOrCategory, searchMovie}= genreOrCategory.actions;
export default genreOrCategory.reducer;