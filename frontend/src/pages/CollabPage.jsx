import { useState } from 'react';
import '../style/home.css'

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
                    <select id="timezone-select" name="timezone">
                        <option value="PST" selected>(PST) Pacific Time</option>
                        <option value="EST">(EST) Eastern Time</option>
                        <option value="CST">(CST) Central Time</option>
                        <option value="MST">(MST) Mountain Time</option>
                    </select>
                </div>

                <div class="calendar-box">
                    <div class="calendar">
                        <div class="day">Mon<button onClick={e => {setDayToEdit('monday')}}></button></div>
                        <div class="day">Tues<button onClick={e => {setDayToEdit('tuesday')}}></button></div>
                        <div class="day">Wed<button onClick={e => {setDayToEdit('wednesday')}}></button></div>
                        <div class="day">Thur<button onClick={e => {setDayToEdit('thursday')}}></button></div>
                        <div class="day">Fri<button onClick={e => {setDayToEdit('friday')}}></button></div>
                        <div class="day">Sat<button onClick={e => {setDayToEdit('saturday')}}></button></div>
                        <div class="day">Sun<button onClick={e => {setDayToEdit('sunday')}}></button></div>
                    </div>
                    <div class="calendar-content">
                        <div class="time-labels">
                            <div class="time">9 am<button onClick={e => {handleScheduleChange(9.00)}}></button></div>
                            <div class="time">10 am<button onClick={e => {handleScheduleChange(10.00)}}></button></div>
                            <div class="time">11 am<button onClick={e => {handleScheduleChange(11.00)}}></button></div>
                            <div class="time">12 pm<button onClick={e => {handleScheduleChange(12.00)}}></button></div>
                            <div class="time">1 pm<button onClick={e => {handleScheduleChange(13.00)}}></button></div>
                            <div class="time">2 pm<button onClick={e => {handleScheduleChange(14.00)}}></button></div>
                            <div class="time">3 pm<button onClick={e => {handleScheduleChange(15.00)}}></button></div>
                            <div class="time">4 pm<button onClick={e => {handleScheduleChange(16.00)}}></button></div>
                            <div class="time">5 pm<button onClick={e => {handleScheduleChange(17.00)}}></button></div>
                        </div>
                        <div class="calendar-grid"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollabPage;