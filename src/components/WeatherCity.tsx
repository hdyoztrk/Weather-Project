import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory, Link } from "react-router-dom"
import placeholder from '../../src/img/placeholder.svg'


const useStyle = makeStyles(theme => ({
    cityLayout2: {
        left: 4,
        background: '#2579f7',
        opacity: 0.8,
        padding: 9,
        borderRadius: '  0px  18px 0px 18px',
        fontFamily: 'Quicksand sans-serif',
        fontSize:13,
        textDecoration: 'none',
       
    },
    cityLayout: {
        width: '32%',
        position: 'relative',
        textAlign:'center',
        color:'black',
        opacity: 0.8,
        padding: 5,
       
    },
    imgIcn: {
        width: '15%',
        height:10,
        alignItems: 'center',
        marginLeft:20,
      },
    de:{
        textDecoration:'none',
        color:'black',
    }
    
}))

type weatherProps = {
    cty: string
}

export default function WeatherCity({ cty }: weatherProps) {
    const classes = useStyle();
    const history=useHistory();
    function goHome(){
        history.push('/')
    }
    const [backImage, setBackImage] = useState(placeholder);
    return (
        <div className={classes.cityLayout}>
            <div className={classes.cityLayout2}>
                <Router> 
                    <Switch>
                    <Link className={classes.de} to="/" onClick={goHome} >{cty}</Link> 
                    </Switch>       
                </Router>      
                <img className={classes.imgIcn} src={backImage} />
            </div>
        </div>
    )
}
