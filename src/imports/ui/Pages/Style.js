import {makeStyles} from '@material-ui/core/styles';
import { blue, green, grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme)=>({

  container: {
    paddingTop: '100px',
  },
  container2: {
    paddingTop: '40px',
  },
  paper: {
    marginBottom:'10px',
    padding: '2px',
    textAlign: 'center',
  },

  //view event info
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: grey[100],
    position: 'fixed',
  },
  small: {
    marginRight: '7px',
    width: '30px',
    height: '30px',
    color: 'blue',
  },
  section1: {
    margin: theme.spacing(3, 2),
    marginBottom: '8px',
    paddingTop: theme.spacing(2),
  },
  section2: {
    margin: theme.spacing(1,2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
  column: {
    // backgroundColor: grey[100],
    marginTop:'20px',
    height:'100%',
    width:'100%',
    textAlign: 'center',
  }
}));

export default useStyles;