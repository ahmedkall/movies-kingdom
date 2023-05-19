import React from 'react'
import { Grid } from '@mui/material'
import useStyles from './styles'
import {Movie} from '..';

const MovieList = ( {movies, numbersOfMoviesToShow}) => {
  const classes = useStyles();
  let movieResults;
  movies.cast ? movieResults=movies.cast : movieResults=movies.results;
  console.log(movieResults)
  return (
      <Grid className={classes.moviesContainer}>
          {movieResults && movieResults.slice(0,numbersOfMoviesToShow).map( (movie,i) => (
              <Movie data-testid="movie"  key={i} movie= {{...movie, i}} className={classes.movie}/>
          ))}
      </Grid>
  );
};



export default MovieList ;