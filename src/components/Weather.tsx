import { makeStyles } from "@material-ui/styles";
import Box from "./Box";
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import WeatherCity from "./WeatherCity";
import WeatherDate from "./WeatherDate";
import Sky from "./Sky";
import Deg from "./Deg";
import { Current, Daily, weatherApi, WeatherSky } from "../types";
import Humudity from "./Humudity";
import Pressure from "./Pressure";
import Wind from "./Wind";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import Daytime from "./Daytime";
import Temp from "./Temp";
import moment from "moment-timezone"
import DayTimeImage from '../../src/img/daytime.png'
import NightTimeImage from '../../src/img/night.png'



type ctyProps = {
  lat: number;
  lon: number;
  cityName: string;
  icon : Dispatch<SetStateAction<string>>
}

const useStyle = makeStyles(theme => ({

  dateCity: {
    zIndex: 999,
    width: "100%",
    background: "#D9D9D9",
    borderRadius: '18px 18px 0px 0px',
    marginTop: -15,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  root: {
    // height:250,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: ' 40%',
    background: "white",
    borderRadius: '18px 18px 0px 0px',
    margin: 0,
    padding: 0,
    '@media (max-width: 600px)': {
      width: '100%',
    }
  },
  weatherInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  weatherRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '5px 0px',

  },
  slider: {
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    width: '100%',
    flexDirection: 'row',
    overflow: 'scroll',
    display: 'flex',
    scrollbarWidth: 'none',
    margin: 0,
    "&::-webkit-scrollbar": {
      width: 0
    },
  },
}))


export default function Weather(props: ctyProps) {
  const months = ['Mon', "Tue", "Wed", "Thue", "Fri", "Sat", "Sun"];
  const time = new Date();
  const hour = time.getHours();
  const ampm = hour >=12 ? 'pm' : 'am'
  const day = time.getDay();
  const day2 = day-1;
  const newDay = [''];
  const newDay2 = [''];
const times =moment(new Date()).format("HH:mm")   
  const y = months.map((x, k) => {
    if (k == 0) {
      newDay.push(months[k])
    }
    if (day2 <= k) {
       newDay.push(months[k])
    }
    if (day2 >= k) {
        newDay2.push(months[k])
    }
  })
  const b=newDay.join(" ").trim().split(' ');
  const a=newDay2.join(" ").trim().split(' ');
  const newDay3 = (b.concat(a));
  const classes = useStyle();

  const weatherCity = {
    url: 'https://api.openweathermap.org/data/2.5/',
    key: 'afc223995e1a8d44363983dbe459df57',
  }
  const [information, setInformation] = useState<Current>();
  const [daily, setDaily] = useState<Daily[]>([]);
  const getUrl = async () => {
    const url = await fetch(`${weatherCity.url}onecall?lat=${props.lat}&lon=${props.lon}&exclude=hourly,minutely&units=metric&appid=${weatherCity.key}`)
    const data = await url.json() as weatherApi
    console.log(data)
    setInformation(data.current)
    setDaily(data.daily);
  }
  useEffect(() => {
    getUrl();
  }, [])
  console.log(information)
  const listItems = months.map((number) =>
    <li >{number}</li>)

  return (
    <div className={classes.root}>
      <div className={classes.dateCity}>
        <WeatherDate />
        <WeatherCity cty={props.cityName} />
      </div>
      <div className={classes.weatherInfo}>
        <div className={classes.weatherRow} >
          {information && information.weather.map((data) => {
            return <Sky sky={data.description} icon={data.icon} />
          })
          }
          {information && <Deg sky={Math.round(information.temp)} />}
          {daily[0] && <Temp min={Math.round(daily[0].temp.min)} max={Math.round(daily[0].temp.max)} />}

        </div>
        <div className={classes.weatherRow}>
          {information && <Humudity main={Math.round(information.humidity)} />}
          {information && <Pressure main={information.pressure} />}
          {information && <Wind main={Math.round(information.wind_speed)} />}

        </div>
        <div className={classes.weatherRow}>
          {information && <Sunrise main={(information.sunrise * 1000)} />}
          {information && <Sunset main={(information.sunset * 1000)} />}
 
       
       {
       information && (moment(information.sunset * 1000)).format('H:mm') <= (times)   
          ? props.icon(NightTimeImage)
          : props.icon(DayTimeImage)


       } 
          {information && <Daytime sunrise={(information.sunrise * 1000)} sunset={(information.sunset * 1000)} />}
        </div>
        <div className={classes.weatherRow}>
          <div className={classes.slider}>
            {daily && daily.map((data, i) => {
              if (i != 0) {
                return <Box min={Math.round(data.temp.min)} max={Math.round(data.temp.max)} str={newDay3[i]} icon={data.weather[0].icon} />
              }
            })}
          </div>

        </div>
      </div>
    </div>
  )
}
