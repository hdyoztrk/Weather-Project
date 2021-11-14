import Picture from "../components/Picture";
import Weather from "../components/Weather";
import DayTimeImage from '../../src/img/daytime.png'
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
type ctyProps = {
  lat: number;
  lon: number;
  cityName: string;
}
const useStyle = makeStyles(theme => ({
  background: {
    background: '#f2f2f2',
    margin: 0,
    padding: 0,
    width: '100%',
  },
  background2: {
    zIndex: -999,
  },
  background3: {
    zIndex: 999,
  },

}))

export default function Home(props: ctyProps) {
  const[day,setDay]=useState("")
  const classes = useStyle();
  return (
    <div className={classes.background}>
      <div className={classes.background2}>
        <Picture icon={day}/>
      </div>
      <div className={classes.background3}>
        <Weather lat={props.lat} lon={props.lon} cityName={props.cityName} icon={setDay}/>
      </div>
    </div>
  )
}
