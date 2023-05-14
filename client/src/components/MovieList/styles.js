import { ThemeContext } from "@emotion/react";
import { makeStyles } from "@mui/styles";

export default makeStyles( (theme) => ( {
      moviesContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'space-evenly',
        overflow: 'auto',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        },
      },
      movie:{
        width:'300px'
      }

}));