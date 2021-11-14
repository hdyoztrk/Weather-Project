import { TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import Image from '../../src/img/placeholder.svg'
import { City } from '../types';
import { BrowserRouter as Router, Route, Switch, useHistory, Link } from "react-router-dom"
import Home from '../views/Home';

const useStyles = makeStyles(() => ({
    txt: {
        fontSize: 18,
        color: '#7F7F7F',
        textAlign: 'center',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: ' 40%',
        margin: 4,
        fontFamily: 'Quicksand sans-serif',
    },
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    field: {
        marginTop: 10,
        backgroundColor: '#e7e7e7',
        color: 'black',
        borderRadius: 8,
        padding: 11,
        fontSize: 8,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: ' 40%',
        '@media (max-width: 600px)': {
            width: "66%",
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
        }

    },
    icon: {
        width: "52%",
        justifyContent: 'center',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 3,
        '@media (max-width: 600px)': {
            width: "45%",
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
        }

    },
    icn: {
        width: "5%",
        height: 25,
        justifyContent: 'center',
        float: 'right',
        '@media (max-width: 600px)': {
            width: "14%",
            height: 30,
            float: 'right',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
        },

    },
    cityText: {

        padding: 10,
        margin: 5,
        fontSize: 14,
        color: "inherit",
        textDecoration: 'inherit'
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'black',
        fontFamily: 'Quicksand sans-serif',
    },
}));

function InputField() {
    const apiCity = {
        url: "https://www.yahoo.com/news/_tdnews/api/resource/WeatherSearch;text=",
    }
    const classes = useStyles();
    const [city, setCity] = useState<City[]>([]);
    const [searchText, setSearchText] = useState("");

    const getUrl = async () => {
        const url = await fetch(`${apiCity.url}${searchText}`)
        const data = await url.json() as City[]
        setCity(data)
    }

    useEffect(() => {
        getUrl();

    }, [searchText])

    return (
        <Router>
            <Switch>
                    
                <Route path="/Weather/:city/:Lat/:Lon" render={(renderProps) => {
                                const ctyValue = parseFloat(renderProps.match.params.Lat ) 
                                const ctyValu = parseFloat(renderProps.match.params.Lon ) 
                               const cityName=renderProps.match.params.city
                                  return  <Home  lat={ctyValue} lon={ctyValu} cityName={cityName} />
                            } }/>
                <Route path="/"
                     exact
                    render={() =>
                        <div>
                            <Typography className={classes.txt}>
                                Location
                            </Typography>
                            <div className={classes.root}>
                                <div className={classes.field}>
                                    <TextField id="input" placeholder="Search"
                                        onChange={(e) => setSearchText(e.target.value)}
                                        value={searchText} InputProps={{ disableUnderline: true }}
                                    />
                                    <div className={classes.icn}>
                                        <img src={Image} className={classes.icon} />
                                    </div>

                                </div>
                            </div>
                            {city && city.map((cty, i) => {
                                return <div onClick={() => {
                                    const cityName = cty.city}} key={i} >
                                    <Link to={`/Weather/${cty.city}/${cty.lat}/${cty.lon} `} className={classes.linkStyle}>
                                        <Typography className={classes.cityText}  >{cty.city + "," + cty.country}</Typography>
                                    </Link>
                                </div>
                            })}
                        </div>
                    } />
            </Switch>
        </Router>
    )
}
export default InputField