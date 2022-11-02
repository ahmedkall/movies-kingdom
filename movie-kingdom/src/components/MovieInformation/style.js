import { ThemeContext } from "@emotion/react";
import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
const drawerWidth =240;

export default makeStyles( (theme) => ( {

        containerSpaceAround: {
            display: 'flex',
            justifyContent:'space-around',
            margin: '10px 0 !important',
            [theme.breakpoints.down('sm')]:{
                flexDirection:'column',
                flexWrap: 'wrap',
            }
        },
        poster:{
            borderRadius: '20px',
            boxShadow: '0.5em 1em 1em rgb(64,54,70)',
            width: '90%',
            [theme.breakpoints.down('sm')]:{
                margin: '0 auto',
                width: '100%',
                marginBottom: '30px',
            },
            [theme.breakpoints.down('md')]:{
                margin: '0 auto',
                width: '80%',
                marginBottom: '30px',

            }


        },
        castImage:{
            width: '100%',
            maxWidth: '7em',
            height: '8em',
            objectFit:'cover',
            borderRadius:'10px'
        },
        buttonContainer:{
            display:'flex',
            justifyContent:'space-between',
            width:'100%',
            [theme.breakpoints.down('sm')]:{
                flexDirection:'column',
            },
        } ,
        modal:{
            display: 'flex',
            alignItems:'center',
            justifyContent:'center',

        },
        video:{
            width:'50%',
            height:'50%',
            [theme.breakpoints.down('sm')]:{
                width:'90%',
                height:'90%',
            }

        }
}));