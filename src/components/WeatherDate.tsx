import { makeStyles } from '@material-ui/core'
import { useEffect, useState } from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const useStyle = makeStyles(theme => ({
    dateLayout: {

        marginLeft: 15,
        width: '70%',
        padding: 8,
        fontFamily: 'Quicksand sans-serif',
        fontSize: 13,
    }
}))

export default function WeatherDate() {
    const classes = useStyle();
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    useEffect(() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const year = time.getFullYear();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour
            const minutes = time.getMinutes();
            const ampm = hour >= 12 ? 'pm' : 'am'

            setTime((hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ampm)

            setDate(days[day] + ', ' + date + ' ' + months[month] + ' ' + year + ' | ')

        }, 1000);
    }, [])
    return (
        <div className={classes.dateLayout}>
            {date}
            {time}
        </div>
    )
}


