import CalendarGrid from './CalendarGrid';
import ClearCalendarButton from './ClearCalendarButton';
import TimezoneSelector from './TimezoneSelector'

function EditCalendarCollection({schedule, setSchedule}){

    // Each cell has a target day and time. This function will be called whenever 
    // a cell is clicked. It will update the schedule variable and add or remove the respective 
    // time/day based on the cell clicked.
    function handleScheduleChange(targetTime, targetDay, add) {

        const newSchedule = schedule.map(day => {
            
            if (day.name == targetDay){
                
                let match = false;
                day.time.map(t => {
                    if (t == targetTime){

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
    }

    return (
        <>
            <CalendarGrid schedule={schedule} setSchedule={setSchedule} onClick={handleScheduleChange}/>
            <ClearCalendarButton/>
        </>
    )
}

export default EditCalendarCollection;