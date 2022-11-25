import React, {useState, useEffect} from 'react';
import { AppBar, IconButton, Toolbar, Drawer , Button, Avatar , useMediaQuery} from '@mui/material';
import {Menu, AccountCircle, Brightness4, Brightness7} from '@mui/icons-material'
import { Link } from 'react-router-dom';
import useStyles from './style'
import { useTheme} from '@mui/material/styles';
import Sidebar from '../SideBar/Sidebar';
import Search from '../Search/Search';
import { fetchToken, moviesApi, createSessionID } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import { setUser,userSelector } from '../../features/authentication';


const NavBar = () => {
    
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px')
    const theme = useTheme();
    const dispatch = useDispatch();
    const {isAuthenticated,user}= useSelector(userSelector);
    
    const token = localStorage.getItem('request_token');
    const sessionIDfromLS = localStorage.getItem('session_id');

    useEffect(() => {
        const logInUser = async ()=>{ 
            if(token){
                if(sessionIDfromLS){
                    const {data: userData}= await moviesApi.get( `/account?session_id=${sessionIDfromLS}`);
                    dispatch(setUser(userData));

                }else{
                    const sessionId = await createSessionID();
                    const {data: userData}= await moviesApi.get( `/account?session_id=${sessionId}`);
                    dispatch(setUser(userData));

                }
            }
        }
        logInUser();
      }, [token])
    
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
                {!isMobile && <Search/>}
                <div>
                    {!isAuthenticated ? ( 
                        <Button color = 'inherit' onClick={fetchToken}>
                            Login &nbsp; <AccountCircle/> {/*&nbsp = space*/} 
                        </Button>

                    ) : (
                        <Button
                            color = 'inherit' 
                            component= {Link} 
                            to= {`/profile/${user.id}`}
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
                {isMobile && <Search/>}
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