import React from 'react'
import { Typography,Button } from '@mui/material';
import useStyles from './styles';
import { ClassNames } from '@emotion/react';

const Pagination = ({currentPage, setPage,totalPages}) => {
  const classes= useStyles();
    if(totalPages===0) return null;
    

    const prevButton=(currentPage)=>{
        if(currentPage !==1)
        setPage((prevPage)=>prevPage-1)
    }
    const nextButton=(currentPage)=>{
        if(currentPage!==totalPages)
        setPage((prevPage)=>prevPage+1 )
    }
  return (
    <div className= {classes.container}>
        <Button className= {classes.button} variant='container' color= 'primary' type='button' onClick={prevButton}>Prev</Button>
        <Typography variant='h4' className={classes.pageNumber}>{currentPage}</Typography>
        <Button className= {classes.button} variant='container' color= 'primary' type='button' onClick={nextButton}>Next</Button>

    </div>
  )
}

export default Pagination