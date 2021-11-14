import { makeStyles } from '@material-ui/core'
import { useState } from 'react';
import DayTimeImage from '../../src/img/96.png'
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
    // background: "#D9D9D9",
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
export default function Sunset(props:props) {
  const classes = useStyle();
  const [backImage, setBackImage] = useState(DayTimeImage);
  return (
    <div className={classes.root}>
      <img className={classes.imgIcn} src={backImage} />
      <div className={classes.fnt1}><b>{moment(props.main).format('h:mm')} PM</b></div>
      <div className={classes.fnt2}>Sunset</div>
    </div>
  )
}
