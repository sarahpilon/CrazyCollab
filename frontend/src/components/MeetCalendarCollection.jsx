import CalendarGrid from './CalendarGrid';

function EditCalendarCollection({schedule, setSchedule}){

    function handleTimeSelect() {
        
    }

    return (
        <>
            <CalendarGrid schedule={schedule} setSchedule={setSchedule} onClick={handleTimeSelect}/>
        </>
    )
}

export default EditCalendarCollection;