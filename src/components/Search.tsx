import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'


const useStyles = makeStyles(() => ({
    txt:{

        fontSize:18,     
        color:'#7F7F7F',
        textAlign:'center'        
    },
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    field: {
        marginTop: 10,
       backgroundColor:'#e7e7e7',
       color:'black',
       borderRadius:20,
       border:'none',
       fontSize:12,     
    },
}));

export default function () {
    const classes = useStyles();
    const[value,setValue]=useState('');
    return (
        <div>
        <p className={classes.txt}> Location</p>
        <div className={classes.root}>
            <TextField className={classes.field} id="outlined-basic" label="Search" variant="outlined" 
             onChange={(e)=>setValue(e.target.value)}
             value={value}
             />
        </div>
        </div>
    )
}
