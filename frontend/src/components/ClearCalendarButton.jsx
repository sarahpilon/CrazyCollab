const identitySchedule = [
    {id: 0, name: "monday", time: []},
    {id: 1, name: "tuesday", time: []},
    {id: 2, name: "wednesday", time: []},
    {id: 3, name: "thursday", time: []},
    {id: 4, name: "friday", time: []},
    {id: 5, name: "saturday", time: []},
    {id: 6, name: "sunday", time: []}
]

function ClearCalendarButton () {

     const clearSchedule = () => {
        setSchedule(identitySchedule);
    }

    return (
        <div class="tools">
            <button onClick={clearSchedule}>clear</button>
        </div>
    )
}

export default ClearCalendarButton