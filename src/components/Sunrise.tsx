import { makeStyles } from '@material-ui/core'
import { useState } from 'react';
import DayTimeImage from '../../src/img/117.png'
import moment from "moment-timezone"

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
      marginTop: 10,
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
    justifyContent: 'center',
    fontFamily: 'Quicksand sans-serif',
    '@media (max-width: 600px)': {
      height: 110,
      margin: 1,
    }
  },
  imgIcn: {
    width: '37%',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      width:'64%',
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
export default function Sunrise(props:props) {
  const classes = useStyle();
  const times=moment(props.main).format('h:mm')
  const [backImage, setBackImage] = useState(DayTimeImage);
  return (
    <div className={classes.root}>
      <img className={classes.imgIcn} src={backImage} />
      <div className={classes.fnt1}><b>{times} AM</b></div>
      <div className={classes.fnt2}>Sunrise</div>
    </div>
  )
}
