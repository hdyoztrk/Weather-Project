import { makeStyles } from '@material-ui/core'


const useStyle=makeStyles(theme => ({
    
    root :{
      height:90,
      width:'31%',
    
      borderRadius:'8px',
      margin:0,
      '@media (max-width: 600px)': {
        height: 110,
        margin:1,
      }
    },
    sky :{
        fontSize: 48,
        margin: 0,
        marginTop:10,
        textAlign:'center',
        color: '#58555A',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 600px)': {
            height: 110,
            margin: 1,
            marginTop:-6,
        }
      },
      fnt:{
        textAlign: 'center',
        fontSize: 30,
    }  
  }))
  type props = {
    sky: number;
  }

export default function Deg(props:props) {
    const classes=useStyle();
    return (
        <div className={classes.root}>
            <div> <span className={classes.sky}>{props.sky}<sup
                className={classes.fnt}>&deg;c</sup></span>
            </div>
        </div>
    )
}
