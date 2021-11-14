import { makeStyles } from '@material-ui/core'
import { useState } from 'react';
import DayTimeImage from '../../src/img/sunny.png'


const useStyle = makeStyles(theme => ({
  txt: {
    fontSize: 18,
    margin: 'auto',
    textAlign: 'center',
    color: '#58555A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    '@media (max-width: 600px)': {    
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
  imgIcn:{
    width:'40%',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      width:'70%',
  }
  },
  fnt1:{
    textAlign: 'center',
    color: '#58555A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 600px)': {
  }
}


}))
type props = {
  sky: string;
  icon:string;
}
export default function Sky(props:props) {
  const classes = useStyle();
  const [backImage, setBackImage] = useState(DayTimeImage);
  return (
    <div className={classes.root}>
      <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} className={classes.imgIcn}/>
      <span className={classes.txt} ><b>{props.sky}</b></span>
    </div>
  )
}
