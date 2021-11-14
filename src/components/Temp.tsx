import { makeStyles } from '@material-ui/core'
import { useState } from 'react'
import down from '../../src/img/down-arrow.svg'
import up from '../../src/img/up-arrow.svg'

const useStyle = makeStyles(theme => ({

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
  smallUpp: {
    marginTop:11,
    textAlign: 'center',
    margin: 'auto',
    width: ' 50%',
    fontSize:15,
  },
  smallDownn: {
    width: ' 50%',
    textAlign: 'center',
    margin: 'auto',
    fontSize:15,

  },  
  imgIcn: {
    width: '15%',
    height:10,
    alignItems: 'center',
  },

}))
type props = {
  min: number;
  max: number;
}
export default function Temp(props: props) {
  const classes = useStyle();
  const [backImageUp, setBackImageUp] = useState(up);
  const [backImageDown, setBackImageDown] = useState(down);
  return (
    <div className={classes.root} >
      <br/>
      <div className={classes.smallUpp}> <span >{props.max}</span>&deg;c
      <img className={classes.imgIcn} src={backImageUp} />
      </div>
     
      <br/>
      <div className={classes.smallDownn} ><span>{props.min}</span>&deg;c
      <img className={classes.imgIcn} src={backImageDown} />
      </div>
      
    </div>
  )
}
