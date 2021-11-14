import { makeStyles } from '@material-ui/core'
import { useState } from 'react';
import DayTimeImage from '../../src/img/8.png'


const useStyle = makeStyles(theme => ({
  txt: {
    fontSize: 18,
    margin: 'auto',
    textAlign: 'center',
    color: '#58555A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      height: 110,
      margin: 1,
    }
  },
  root: {
    height: 90,
    width: '31%',
 
    borderRadius: '8px',
    margin: 0,
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    /* position: absolute; */
    justifyContent: 'center',
    fontFamily: 'Quicksand sans-serif',
    '@media (max-width: 600px)': {
      height: 110,
      margin: 1,
    }
  },
  imgIcn: {
    width: '34%',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      width:'60%',
  }
  },
  fnt1: {
    textAlign: 'center',
    margin: 'auto',
    color: '#58555A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      marginTop: 5,
    }
  },
  fnt2: {
    fontSize: 11,
    textAlign: 'center',
    margin: 'auto',
    color: '#7F7F7F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      marginTop: 5,
    }
  }
}))
type props = {
  main: number;
}
export default function Wind(props:props) {
  const classes = useStyle();
  const [backImage, setBackImage] = useState(DayTimeImage);
  return (
    <div className={classes.root}>
      <img className={classes.imgIcn} src={backImage} />
      <div className={classes.fnt1}><b><span>{props.main}</span>km/h</b></div>
      <div className={classes.fnt2}>Wind</div>
    </div>
  )
}
