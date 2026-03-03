import CalendarGrid from './CalendarGrid';

function EditCalendarCollection({schedule, setSchedule}){

    function handleScheduleChange(targetTime, targetDay, add) {

        const newSchedule = schedule.map(day => {
            if (day.name == targetDay){
                let match = false;
                day.time.map(t => {
                    if (t == targetTime){
                        console.log("match!");
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
        console.log(newSchedule);
    }

    return (
        <>
            <CalendarGrid schedule={schedule} setSchedule={setSchedule} onClick={handleScheduleChange}/>
        </>
    )
}

export default EditCalendarCollection;