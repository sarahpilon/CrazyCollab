

function CalendarTime({time}) {

    function parseTime(){

        const pm = (time - 12 > 0)

        let timeString = Math.floor((time - 1) % 12 + 1).toString();

        if (time % 1.0 == 0) {timeString += ':00'} else {timeString += ':' + (time % 1.0 * 60.0).toString()}

        if (pm) {timeString += ' pm'} else {timeString += ' am'}

        return timeString;
    }

    return (
        <div class="time">{parseTime(time)}</div> 
    )
}

export default CalendarTime;