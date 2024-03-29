import React from 'react'
import { Grid } from '@mui/material'
import useStyles from './styles'
import {Movie} from '..';

const MovieList = ({ movies, numbersOfMoviesToShow }) => {
    const classes = useStyles();
    let movieResults;
    movies?.cast ? movieResults = movies.cast : movieResults = movies.results;
    return (
      <Grid className={classes.moviesContainer}>
        {movieResults && movieResults.slice(0, numbersOfMoviesToShow).map((movie, i) => (
          <Movie data-testid="movie" key={i} movie={{ ...movie, i }} className={classes.movie} />
        ))}
      </Grid>
    );
  };
  
  MovieList.defaultProps = {
    movies: {},
    numbersOfMoviesToShow: 0,
  };


export default MovieList ;