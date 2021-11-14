import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import down from '../../src/img/down-arrow.svg'
import up from '../../src/img/up-arrow.svg'

const useStyle = makeStyles(theme => ({
  root: {
    height: 85,
    minWidth: '31%',
    borderRadius: 8,
    margin: 7,
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    position: "relative",
    border: "1 solid white",
    boxShadow: " 0px 2px 5px #cccccc",
    justifyContent: 'center',
    fontFamily: 'Quicksand sans-serif',
    float: 'left',
    '@media (max-width: 600px)': {
      height: 95,
      margin: 4,
    },

  },
  smallUpp: {
    marginTop: 5,
    marginRight: 0,
    marginBottom: 8,
    marginLeft: '30%',
    float: 'left',
    width: ' 20%',
    fontSize: 10,
    '@media (max-width: 600px)': {
      marginLeft: '24%',
    },
  },
  smallDownn: {
    marginTop: 5,
    marginRight: '30%',
    marginBottom: 8,
    marginLeft: 0,
    width: ' 20%',
    float: 'right',
    textAlign: 'center',
    fontSize: 10,
    '@media (max-width: 600px)': {
      marginRight: '28%',
    },

  },
  imgIcn: {
    width: '20%',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      width: '20%',
    },
  },
  imgIcn2: {
    width: '20%',
    marginBottom:2,
    alignItems: 'center',
    '@media (max-width: 600px)': {
      width: '29%',
      marginBottom:4,
    },
  },
  Icn: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    float: 'left'

  },

}))

type props = {
  min: number;
  max: number;
  str:string;
  icon: string;
}

export default function Box(props: props) {
  const classes = useStyle();

  const [backImageUp, setBackImageUp] = useState(up);
  const [backImageDown, setBackImageDown] = useState(down);
  const months = ["Sun", 'Mon', "Tue", "Wed", "Thue", "Fri", "Sat"];
  const [date, setDate] = useState('')
  useEffect(() => {

    const time = new Date();
    const month = time.getMonth();
    const year = time.getFullYear();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();

    setDate(months[day])
  }, [])
  {
    for (var i = 0; i < 6; i++) {
      if (months[i] == date) {

      }
    }
  }

  return (
    <div className={classes.root}>
      <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} className={classes.imgIcn2} />

        <div >{props.str}{","}{new Date().getFullYear().toString().substr(-2)}</div>
        <div >
          <div className={classes.smallUpp}> <span >{props.max}</span>&deg;c
            <img className={classes.imgIcn} src={backImageUp} />
          </div>

          <div className={classes.smallDownn} ><span>{props.min}</span>&deg;c
            <img className={classes.imgIcn} src={backImageDown} />
          </div>
        </div>
    </div>
  )
}
