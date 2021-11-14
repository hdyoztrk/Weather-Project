import { makeStyles } from '@material-ui/core'
const useStyle = makeStyles(theme => ({
    root: {
        height: 295,
        width: "100%",
        margin: 0,
        padding: 0,
    },

    imgStyle: {
        zIndex: -999,
        height: 279,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: ' 40%',
        '@media (max-width: 600px)': {
            width: '100%',
            height: 277,
            margin:0,
            padding:0,
        }
    }
}));

type ctyProps = {
    icon:string;
  }
export default function Picture(props:ctyProps) {
    const classes = useStyle();
    return (

        <div className={classes.root}>
            <img  className={classes.imgStyle} src={props.icon} />
        </div>
    ) 
}
