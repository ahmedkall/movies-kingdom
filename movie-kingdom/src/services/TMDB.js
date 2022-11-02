import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const tmdbApiKey = '0067f4c1a8157e1b0096a428d72e2b61';

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl:'https://api.themoviedb.org/3'}),
    endpoints: (builder)=>({
        //* Get Genres
        getGenres: builder.query({
            query: ()=> `genre/movie/list?api_key=${tmdbApiKey}`,
        }),
        //* Get Movies by [Type] 
        getMovies: builder.query ({
            query: ({genreIdOrCategoryName,page, searchQuery}) =>  {

                //*Get Movies By Search 
                if(searchQuery){
                    console.log(searchQuery,page);

                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`
                }

                //*Get Movies by Category
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string'){
                    console.log(typeof genreIdOrCategoryName,page);

                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`

                }
                //*Get Movies by Genre
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number'){
                    console.log(typeof genreIdOrCategoryName, page);
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`

                }

                //*Get Popular movies   
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
                
            }
            
        }),
        //* Get Movie 
        getMovie: builder.query({
            query: (id)=> `/movie/${id}?append_to_response=videos&api_key=${tmdbApiKey}`
        }),
    }),
});

export const {
    useGetGenresQuery,
    useGetMoviesQuery,
    useGetMovieQuery,

}= tmdbApi;