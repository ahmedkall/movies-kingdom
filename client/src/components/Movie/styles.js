import { makeStyles } from "@mui/styles";

export default makeStyles( (theme) => ( {
       movie:{

        paddingRight:"45px",
        paddingLeft:"45px",
        paddingBottom:"20px"
        
       },
       links:{
              alignItems: 'center',
              fontWeight: 'bolder',
              textDecoration: 'none',
              // [theme.breakpoints.up('xs')]: {
              //        display: 'flex',
              //        flexDirection:'column',
              // },
              '&:hover': {
                     cursor: 'pointer',                  
              },

       },
       image:{
              borderRadius: '25px',
              height: '300px',
              marginBottom: '10px',
              '&:hover': {
                     transform: 'scale(1.05)'
              }

       }
       ,

       title:{
        //color: theme.palette.text.primary,
        textOverflow: 'ellipsis',
        width: '230px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center',

       },

})); 