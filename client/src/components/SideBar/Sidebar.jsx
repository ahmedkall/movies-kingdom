/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Divider, List,ListItem, ListItemText,ListSubheader,ListItemIcon,Box,CircularProgress} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/styles';
import useStyles from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import genreIcons from '../../assets/genres'

const categories = [ 
  {label: 'Popular', value: 'popular'},
  {label: 'Top Rated', value: 'top_rated'},
  {label: 'Upcoming', value: 'upcoming'},

];

const Sidebar = ({setMobileOpen}) => {
    const theme = useTheme();
    const classes= useStyles();
    const {data,isFetching}=useGetGenresQuery();
    const dispatch = useDispatch();
  return (
    <>
        <Link to="/" className={classes.imageLink}>
            <img         
                className= {classes.image}
                src= {theme.palette.mode === 'light' ? genreIcons['logoInverted'] :genreIcons['logo'] }
                alt="Logo"
            />
        </Link>
        <Divider/>
        <List>
            <ListSubheader>Categories</ListSubheader> 
            {categories.map ( ({label,value}) => (  
              <Link key={value} className ={classes.links} to= "/">
                <ListItem data-testid={value} onClick={() => dispatch ( selectGenreOrCategory(value) ) } button>
                    <ListItemIcon>
                      <img  src={genreIcons[label.toLowerCase()]} className = {classes.genreImages} height = {30} />
                    </ListItemIcon>
                    <ListItemText primary= {label}/>
                </ListItem>

                
              </Link>
              
            )) }  {/* in line 41 we are retuning an object because we are using () not {}*/}
        </List>
        <Divider/>
        <List>
            <ListSubheader>Genres</ListSubheader> 
              { isFetching 
              ? 
              (
                <Box display='flex' justifyContent='center'> 
                  <CircularProgress/>
                </Box>
              ) 
              : 
                data.genres.map ( ({name,id}) => (  
                  <Link key={name} className ={classes.links} to= "/">
                    <ListItem onClick={() =>dispatch ( selectGenreOrCategory(id) )  } button>
                        <ListItemIcon>
                          <img src={genreIcons[name.toLowerCase()]} className = {classes.genreImages} height = {30} />
                        </ListItemIcon>
                      <ListItemText primary= {name}/>
                    </ListItem>
                 </Link>
              )) }  
        </List>
    </>
  )
}

export default Sidebar