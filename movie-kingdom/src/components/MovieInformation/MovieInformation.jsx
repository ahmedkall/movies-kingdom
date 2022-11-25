import React, {useState} from 'react';
import { Modal,Typography, ButtonGroup,Grid,Box,CircularProgress,useMediaQuery,Rating, Button } from '@mui/material';
import { Theaters, Movie as MovieIcon,Language,PlusOne,Favorite,FavoriteBorderOutlined,Remove,ArrowBack } from '@mui/icons-material';
import { Link,useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import { useGetMovieQuery, useGetCreditsQuery, useGetSimilarMovieQuery } from '../../services/TMDB';
import useStyles from './style';

import { MovieList } from '..';


const MovieInformation = () => {
  const [open, setopen] = useState(false)
  const {id}=useParams();
  const classes= useStyles();
  const {data,isFetching,error} =useGetMovieQuery(id);
  const {data: dataCredits ,isFetching: isFetchingCredits ,error: errorCredits} =useGetCreditsQuery(id);
  const {data: dataSimilarMovies ,isFetching: isFetchingSimilarMovies ,error: errorSimilarMovies} =useGetSimilarMovieQuery(id);
  let spokenLanguages = (data)=>{ 
    let languages='';
    data.spoken_languages.forEach( (lang) => {languages+= '  '+lang.english_name;})
    return languages; 
    
  };
  
  
  if(isFetchingCredits) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <CircularProgress size='8rem'/>
      </Box>
    )
  }
  if(errorCredits) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Link to=''>Something has gone wrong go back.</Link>
      </Box>
    )
  }
  
  if(isFetching) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <CircularProgress size='8rem'/>
      </Box>
    )
  }
  if(error) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Link to=''>Something has gone wrong go back.</Link>
      </Box>
    )
  }
  if(isFetchingSimilarMovies) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <CircularProgress size='8rem'/>
      </Box>
    )
  }
  if(errorSimilarMovies) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Link to=''>Something has gone wrong go back.</Link>
      </Box>
    )
  }
  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4} style={{ marginBottom:'30px', alignItems:'center'}}>
        <img 
          className={classes.poster}
          src= {`https://image.tmdb.org/t/p/w500/${data.poster_path}`}  
          alt= {data.title}
          />
        
      </Grid>
      <Grid item container direction='column' lg={7}>
        <Typography variant ='h3' align='center' gutterBottom>
          {data.title} ({(data.release_date.split('-')[0])})
        </Typography>
        <Typography variant ='h5' align='center' gutterBottom>
          {data.tagline? data.tagline : null}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display='flex' align='center'>
            <Rating readOnly value={data.vote_average /2} />
            <Typography variant='subtitle1' gutterBottom style={{marginLeft: '10px'}}>
              {data.vote_average.toFixed(1)} / 10
            </Typography>
          </Box>
          <Typography>
            {data.runtime} min {data.spoken_languages? `/${
              spokenLanguages(data)}`  : ''}
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}> {/*style to be added*/}
              {data.genres?
                 data.genres.map((genre,i)=>(
                <Link key={genre.name} className={classes.links} to='/' onClick={()=>{ }}>
                  /*genre images to be added.
                </Link>
              )) : 'null'  
              }
        </Grid>
        <Typography variant='h5' gutterBottom style={{marginTop: '10px'}}>
            Overview
        </Typography>
        <Typography style={{marginBottom: '2rem'}}>
            {data.overview}
        </Typography>
        <Typography variant='h5' gutterBottom style={{marginTop: '10px'}}>
            Top Cast
        </Typography>
        <Grid item container spacing={2}>
        
          {(dataCredits.cast? dataCredits.cast.map((character,i)=>(
            
              character.profile_path && 
              <Grid key={i} item xs={4} md={2} component={Link} to={`/actors/${character.id}`} style= {{textDecoration:'none'}}>
                <img className={classes.castImage} src ={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} alt={character.name}/>
                <Typography color='textPrimary'>{character.name}</Typography>
                <Typography color='textSecondary'>{character.character.split('/')[0]}</Typography>
              </Grid>
          )): ''
          ).slice(0,6)}
        </Grid>
        <Grid item container style={{marginTop:'2rem'}}>
          <div className={classes.buttonsContainer}>
            <ButtonGroup size='small' variant='outlined'>
              <Button target='_blank' rel='noopener noreferrer' href={data.homepage} endIcon={<Language/>}>Website</Button>
              <Button target='_blank' rel='noopener noreferrer' href={`https://www.imdb.com/title/${data.imdb_id}`} endIcon={<MovieIcon/>}>imDb</Button>
              <Button onClick={()=>{setopen(true)}} href='#' endIcon={<Theaters/>}>Trailer</Button>
            </ButtonGroup>
          </div>
        </Grid>
      </Grid>
      <Box marginTop='5rem' width='100%'>
            <Typography variant='h4' gutterBottom align= 'center'> You might also like </Typography>
           
            {dataSimilarMovies
            ? <MovieList movies={dataSimilarMovies} numbersOfMoviesToShow={12}/>
            : <Box>Nothing was Found</Box> 
             }
      </Box>
      <Modal closeAfterTransition className={classes.modal} open={open} onClose={()=>{setopen(false)}}>
             {data.videos.results.length>0 && (
              <iframe
                autoPlay
                className={classes.video}
                frameBorder='0'
                title='Trailer'
                src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
                allow='autoplay'
             />)}
      </Modal>
    </Grid>
  );
};

export default MovieInformation;