import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const tmdbApiKey = '0067f4c1a8157e1b0096a428d72e2b61';
const page =1;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl:'https://api.themoviedb.org/3'}),
    endpoints: (builder)=>({
        //* Get Genres
        getGenres: builder.query({
            query: ()=> `genre/movie/list?api_key=${tmdbApiKey}`,
        }),
        //*Get Movies by [Type] 
        getMovies: builder.query ({
            query: () =>  `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
            
        }),

    }),
})

export const {
    useGetGenresQuery,
    useGetMoviesQuery,
}= tmdbApi;