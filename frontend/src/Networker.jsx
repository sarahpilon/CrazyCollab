import CalendarGrid from './CalendarGrid';

function MeetCalendarCollection({schedule, setSchedule}){

    function handleTimeSelect() {
        
    }

    return (
        <>
            <CalendarGrid schedule={schedule} setSchedule={setSchedule} onClick={handleTimeSelect}/>
        </>
    )
}

export default MeetCalendarCollection;