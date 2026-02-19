import { useState } from 'react';
import '../style/home.css'
import CalendarCollection from '../components/CalendarCollection';

const identitySchedule = [
    {id: 0, name: "monday", time: [8.00]},
    {id: 1, name: "tuesday", time: [8.00]},
    {id: 2, name: "wednesday", time: [8.00]},
    {id: 3, name: "thursday", time: [8.00]},
    {id: 4, name: "friday", time: [8.00]},
    {id: 5, name: "saturday", time: [8.00]},
    {id: 6, name: "sunday", time: [8.00]}
]

function CollabPage() {

    const [schedule, setSchedule] = useState(identitySchedule);
    const [dayToEdit, setDayToEdit] = useState('monday');

    function handleScheduleChange(targetTime) {

        const newSchedule = schedule.map(day => {
            if (day.name == dayToEdit){
                let match = false;
                day.time.map(t => {
                    if (t == targetTime){
                        console.log("match!");
                        match = true;
                    }
                })
                
                if (match){
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

    // Need to replace portions of this with the components so they can be re-used in different areas. The calendar grid should be able to be
    // reused when users set their availabilty and when they view their group's collective schedule/availability. Lots of diverse functionality 
    // can be allowed even when components are re-used, since we can pass in different functions for the 'onClick' effects, for example.

    // Currently, I setup buttons on the days and times just to test out my 'setState' functions. Clicking on a day's button will set that day 
    // as the 'dayToEdit', and clicking on a time will add that time as availabilty under the 'dayToEdit', or remove that time if the time is 
    // already listed in that day's array of times.
    return(
        <div class="body">
            <div class="card">
                <div class="logo">Crazy Collab</div>
                <div class="subtext">Find meeting times that actually work for everyone</div>
                <div class="group-members-title">Group Members</div>
                <div class="group-members-box"></div>
                <a href="https://web.engr.oregonstate.edu/~wilkinel/dancing-lady/" class="invite-button">Invite More</a>
            </div>

            <div class="rightcard">
                <div class="meeting-name">Group Meeting: Crazy Testing!</div>
                <div class="timezone">
                    <label for="timezone-select">Timezone:</label>
                    <select id="timezone-select" name="timezone" defaultValue={"PST"}>
                        <option value="PST">(PST) Pacific Time</option>
                        <option value="EST">(EST) Eastern Time</option>
                        <option value="CST">(CST) Central Time</option>
                        <option value="MST">(MST) Mountain Time</option>
                    </select>
                </div>

                <CalendarCollection></CalendarCollection>
            </div>
        </div>
    )
}

export default CollabPage;