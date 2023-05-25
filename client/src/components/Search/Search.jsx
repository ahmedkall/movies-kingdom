import React from 'react';
import { useState } from 'react';
import { TextField , InputAdornment } from '@mui/material';
import {Search as SearchIcon} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useStyles from './styles'
import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
    const classes= useStyles();
    const dispatch= useDispatch();
    const handleKeyPress = (event) => {
      if(event.key=== 'Enter'){
        console.log('query in search.js',query);
        dispatch(searchMovie(query))
        
      }
    };
    const [query, setQuery] = useState('');
    const location = useLocation();
    if(location.pathname !== '/') return null;
    
  return ( 
    <div className={classes.searchContainer}>
      <TextField 
        data-testid='searchBar'
        onKeyPress={handleKeyPress}
        value= {query}
        onChange={(e)=> setQuery(e.target.value)}
        variant = "standard"
        InputProps={{
          'data-testid': 'searchBarInput' ,
          className: classes.input,
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon/>
            </InputAdornment>

          )
        }}
      />
    </div>
  )
}

export default Search