import React,{useState,useEffect} from 'react';
import {Box,CircularProgress,UseMediaQuery, Typography} from '@mui/material'
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import {MovieList,Pagination} from '..';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const Movies = () => {
  const [page,setPage]= useState(1);
<<<<<<< HEAD
  const {genreIdOrCategoryName, searchQuery}= useSelector((state)=> state.currentGenreOrCategory);

  const {data , error, isFetching}= useGetMoviesQuery({genreIdOrCategoryName, page, searchQuery});
=======
  const {genreIdOrCategoryName}= useSelector((state)=> state.currentGenreOrCategory);

  const {data , error, isFetching}= useGetMoviesQuery({genreIdOrCategoryName, page});
>>>>>>> af2192a6a13c1796025f12304b79a8a35dd50524


  if(isFetching){
    return (
      <Box display='flex' justifyContent='center'> 
       <CircularProgress size='4rem'/>
      </Box>
      
    );
  };
  if(!data.results.length){
    console.log(data);
    return (
      <Box>
        <Typography variant='h4'>
        No movies that match that name.
        <br/>
        Please search for something else.
        </Typography>
      </Box>
    );
  };
  if (error) return 'an error has occured.';

  return (
    <div>
      <MovieList movies={data}/>
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages}/>
    </div>
  
    ); 
};
export default Movies;