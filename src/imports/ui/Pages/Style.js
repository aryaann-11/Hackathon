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
}));

export default useStyles;