import React from 'react';
import { useState } from 'react';
import {
  useGetActorQuery,
  useGetMovieCreditsQuery,
} from '../../services/TMDB';
import {
  Movie as MovieIcon,
  ArrowBack,
} from '@mui/icons-material';

import { Link, useParams } from 'react-router-dom';
import {
  Typography,
  Grid,
  Box,
  CircularProgress,
  Button,
} from '@mui/material';
import useStyles from './style';
import { MovieList } from '..';

const Actors = () => {
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorQuery(id);
  console.log(id, page)

  const {
    data: movieCredits,
    isFetching: isFetchingMovieCredits,
    error: errorMovieCredits,
  } = useGetMovieCreditsQuery(id);
  const classes = useStyles();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="">Something has gone wrong go back.</Link>
      </Box>
    );
  }
  if (isFetchingMovieCredits) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (errorMovieCredits) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="">Something has gone wrong go back.</Link>
      </Box>
    );
  }

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
          alt={data.name}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" gutterBottom style={{ marginTop: '10px' }}>
          {data.name}
        </Typography>
        <Typography variant="h5" gutterBottom style={{ marginTop: '10px' }}>
          Born:{data.birthday}
        </Typography>
        <Typography style={{ marginBottom: '2rem' }}>
          {data.biography ? data.biography : `We apologize, we couldn't find a biography for this actor`}
        </Typography>
      </Grid>
      <Box marginTop="2rem" display="block" justifyContent="space-around">
        <Button
          size="small"
          variant="contained"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.imdb.com/name/${data.imdb_id}`}
          endIcon={<MovieIcon />}
        >
          imDb
        </Button>
        <Button
          onClick={() => {
            window.history.go(-1);
          }}
          endIcon={<ArrowBack />}
        >
          Back
        </Button>
      </Box>

      <Box marginTop="5rem" width="100%">
        <Typography variant="h4" gutterBottom align="center">
          {' '}
          Movies{' '}
        </Typography>

        {movieCredits ? (
          <MovieList movies={movieCredits} numbersOfMoviesToShow={12} />
        ) : (
          <Box>Nothing was Found</Box>
        )}
      </Box>
      {console.log(movieCredits.cast.length)}

    </Grid>
  );
};

export default Actors;
