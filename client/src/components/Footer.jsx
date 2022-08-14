/*
------Footer component------
*/
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer =()=> {
    
  const Copyright = (props)=>{
    return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © Khomotso '}
                <Link color="inherit" href="#">
                  StudyCards
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            );
    }
    return (
        <Copyright sx={{ position: 'absolute',
          textAlign: 'center',
          bottom: '0',
          width: '100%',
          height: '2.5rem',
          }} />
    );
  }

  export default Footer
  