import { makeStyles } from "@mui/styles";

export default makeStyles( (theme) => ( {
        root: {
        searchContainer:{
            [theme.breakpoints.down('sm')]:{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
            }
            
        },
        input:{
            
            color: theme.palette.mode === 'light' && 'black',
            filter: theme.palette.mode === 'dark' && 'invert(1)',
            [theme.breakpoints.down('sm')]:{
                marginTop: '-10px',
                marginBottom: '10px',

            }

        },
        }

}));