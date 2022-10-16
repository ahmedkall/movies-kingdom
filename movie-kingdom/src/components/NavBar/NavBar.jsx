import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer , Button, Avatar , useMediaQuery} from '@mui/material';
import {Menu, Brightness4, Brightness7} from '@mui/icons-material'
import { Link } from 'react-router-dom';
import useStyles from './style'
import { useTheme} from '@mui/material/styles';
import Sidebar from '../SideBar/Sidebar';



const NavBar = () => {
    
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px')
    const theme = useTheme();
    
  return (
    <>
        <AppBar positon = 'fixed'>
            <Toolbar className={classes.toolbar}>
                {isMobile && (
                    <IconButton
                        color= "inherit"
                        edge = "start"
                        style={ {outline: 'none'}}
                        onClick = {() =>{} } 
                        className = {classes.menuButton}
                    >
                        <Menu />
                    </IconButton>
                )  }
                <IconButton color = 'inherit' sx= {{ ml: 1 } } onClick = {() => {}}>  {/* ml= margin left */}
                    {theme.palette.mode === 'dark' ? <Brightness7/> : <Brightness4/> }
                </IconButton>
                {!isMobile}
                <div>
                     
                        <Button
                            color = 'inherit' 
                            component= {Link} 
                            to= {``}
                            className= {classes.linkButton}
                            onClick = {()=>{}}
                            >
                            {!isMobile && <>My Movies &nbsp;</> }
                            <Avatar
                            
                                style= {{ width:30, height:30 }}
                                alt=  'Profile'
                                src = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"

                             />
                            
                        </Button>

                    
                </div>
                {isMobile}
            </Toolbar>
        </AppBar> 
        {/*sidebar*/}
        <div>
            <nav className={classes.drawer}>

                        { isMobile? (
                            <Drawer
                                variant= "temporary"
                                anchor= "right" 
                                onClose= {()=> {} }
                                classes= {{paper: classes.drawerPaper}}
                                ModalProps= {{keepMounted: true}}
                            >
                                <Sidebar/>

                            </Drawer>
                        ):(
                            
                            <Drawer classes ={{paper: classes.drawerPaper}} variant="permanent" open>
                                <Sidebar/>
                            </Drawer>

                        )}

            </nav>
        </div>
    </>
  );
};
 
export default NavBar;