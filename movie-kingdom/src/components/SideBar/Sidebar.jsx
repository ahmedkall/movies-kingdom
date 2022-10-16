import React from 'react';
import {Divider, List,ListItem, ListItemText,ListSubheader,ListItemIcon} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import useStyles from './styles';


const demoCategories = [ 
  {label: 'Comedy', value: 'comedy'},
  {label: 'Action', value: 'action'},
  {label: 'Horror', value: 'horror'},
  {label: 'Animation', value: 'animation'},

];
const categories = [ 
  {label: 'Popular', value: 'popular'},
  {label: 'Top Rated', value: 'top_rated'},
  {label: 'Upcoming', value: 'upcoming'},

];

const redLogo= "";
const blueLogo= "";

const Sidebar = () => {
    const theme = useTheme();
    const classes= useStyles();  
  return (
    <>
        <Link to="/" className={classes.imageLink}>
            <img
                
                className= {classes.image}
                src= {theme.palette.mode === 'light' ? redLogo :blueLogo }
                alt="MovieKingdom  Logo"
            />
        </Link>
        <Divider/>
        <List>
            <ListSubheader>Categories</ListSubheader> 
            {categories.map ( ({label,value}) => (  
              <Link key={value} className ={classes.links} to= "/">
                <ListItem onClick={()=>{} } button>
                    <ListItemIcon>
                      <img src={redLogo} alt="" className = {classes.genreImages} height = {30} />
                    </ListItemIcon>
                    <ListItemText primary= {label}/>
                </ListItem>

                
              </Link>
              
            )) }  {/* in line 41 we are retuning an object because we are using () not {}*/}
        </List>
        <Divider/>
        <List>
            <ListSubheader>Genres</ListSubheader> 
              { 
                demoCategories.map ( ({label,value}) => (  
                  <Link key={value} className ={classes.links} to= "/">
                    <ListItem  onClick={() =>{}  } button>
                        {/* <ListItemIcon>
                          <img src={redLogo} className = {classes.genreImages} height = {30} />
                        </ListItemIcon> */}
                      <ListItemText primary= {label}/>
                    </ListItem>
                 </Link>
              )) }  
        </List>
    </>
  )
}

export default Sidebar