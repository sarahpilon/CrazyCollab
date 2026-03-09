import CalendarGrid from './CalendarGrid';
import ClearCalendarButton from './ClearCalendarButton';
import TimezoneSelector from './TimezoneSelector'

function EditCalendarCollection({schedule, setSchedule}){

    function handleScheduleChange(targetTime, targetDay, add) {

        const newSchedule = schedule.map(day => {
            if (day.name == targetDay){
                let match = false;
                day.time.map(t => {
                    if (t == targetTime){
                        // console.log("match!");
                        match = true;
                    }
                })

                if (match && add){
                    return {
                        ...day
                    }
                }
                
                if (!add){
                    return {
                        ...day,
                        time: day.time.filter(n => {
                            return n != targetTime;
                        })
                    }
                } else {
                    return {
                        ...day,
                        time: [
                            ...day.time,
                            targetTime
                        ]
                    }
                }
            } else {
                return day;
            }
        })

        setSchedule(newSchedule);
        // console.log(newSchedule);
    }

    return (
        <>
            <TimezoneSelector/>
            <CalendarGrid schedule={schedule} setSchedule={setSchedule} onClick={handleScheduleChange}/>
            <ClearCalendarButton/>
        </>
    )
}

export default EditCalendarCollection;