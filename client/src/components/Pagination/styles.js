import { makeStyles } from "@mui/styles";

export default makeStyles( (theme) => ( {
        container: {
            marginTop:'2rem',
            display:'flex',
            justifyContent:'center',
            alignItems:'center', 
        },
        button:{
            margin: '30px 2px',
        },
        pageNumber:{
            margin: '0 20px !important',
            color: theme.palette.text.primary,
        }

}));