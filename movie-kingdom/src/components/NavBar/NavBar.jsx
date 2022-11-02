import React, {useState} from 'react';
import { AppBar, IconButton, Toolbar, Drawer , Button, Avatar , useMediaQuery} from '@mui/material';
import {Menu, AccountCircle, Brightness4, Brightness7} from '@mui/icons-material'
import { Link } from 'react-router-dom';
import useStyles from './style'
import { useTheme} from '@mui/material/styles';
import Search from '../Search/Search';
import Sidebar from '../SideBar/Sidebar';


const NavBar = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px')
    const theme = useTheme();
    const isAutheticated= true;
  return (
    <>
        <AppBar positon = 'fixed'>
            <Toolbar className={classes.toolbar}>
                {isMobile && (
                    <IconButton
                        color= "inherit"
                        edge = "start"
                        style={ {outline: 'none'}}
                        onClick = {() => setMobileOpen ( ( prevMobileOpen ) => !prevMobileOpen ) } 
                        className = {classes.menuButton}
                    >
                        <Menu />
                    </IconButton>
                )  }
                <IconButton color = 'inherit' sx= {{ ml: 1 } } onClick = {() => {}}>  {/* ml= margin left */}
                    {theme.palette.mode === 'dark' ? <Brightness7/> : <Brightness4/> }
                </IconButton>
<<<<<<< HEAD
                {!isMobile && <Search/> }
=======
                {!isMobile && 'search..'}
>>>>>>> af2192a6a13c1796025f12304b79a8a35dd50524
                <div>
                    {!isAutheticated ? ( 
                        <Button color = 'inherit' onClick={() => {}}>
                            Login &nbsp; <AccountCircle/> {/*&nbsp = space*/} 
                        </Button>

                    ) : (
                        <Button
                            color = 'inherit' 
                            component= {Link} 
                            to= {`/profile/:id`}
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

                    )}
                </div>
<<<<<<< HEAD
                {isMobile && <Search/>}
=======
                {isMobile && 'search..'}
>>>>>>> af2192a6a13c1796025f12304b79a8a35dd50524
            </Toolbar>
        </AppBar> 
        {/*sidebar*/}
        <div>
            <nav className={classes.drawer}>

                        { isMobile? (
                            <Drawer
                                variant= "temporary"
                                anchor= "right" 
                                open ={mobileOpen}
                                onClose= {()=> setMobileOpen ((prevMobileOpen)=> !prevMobileOpen) }
                                classes= {{paper: classes.drawerPaper}}
                                ModalProps= {{keepMounted: true}}
                            >
                                <Sidebar setMobileOpen={setMobileOpen}/>

                            </Drawer>
                        ):(
                            
                            <Drawer classes ={{paper: classes.drawerPaper}} variant="permanent" open>
                                <Sidebar setMobileOpen={setMobileOpen}/>
                            </Drawer>

                        )}

            </nav>
        </div>
    </>
  );
};
 
export default NavBar;