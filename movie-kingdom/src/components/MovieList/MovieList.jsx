import React from 'react'
import { Grid } from '@mui/material'
import useStyles from './styles'
import {Movie} from '..';

const MovieList = ( {movies, numbersOfMoviesToShow}) => {
    const classes = useStyles();
    let movieResults='';
    movies.cast ? movieResults=movies.cast : movieResults=movies.results;
  return (
    <Grid className={classes.moviesContainer}>
      
        {movieResults.slice(0,numbersOfMoviesToShow).map( (movie,i) => (
            <Movie key={i} movie= {movie} i={i} className={classes.movie}/>
        ))}
    </Grid>
  );
};

export default MovieList ;