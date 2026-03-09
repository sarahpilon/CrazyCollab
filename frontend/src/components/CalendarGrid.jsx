import { useState, useEffect } from 'react';
import CalendarCell from './CalendarCell';
import CalendarTime from './CalendarTime';


function CalendarGrid ({schedule, setSchedule, onClick}){

    const times = [8., 8.5, 9., 9.5, 10., 10.5, 11., 11.5, 12., 12.5, 13., 13.5, 14., 14.5, 15., 15.5, 16., 16.5, 17., 17.5, 18., 18.5]

    return (
        <>
            <div class="calendar-box">
                    <div class="calendar">
                        <div class="day">Mon</div>
                        <div class="day">Tues</div>
                        <div class="day">Wed</div>
                        <div class="day">Thur</div>
                        <div class="day">Fri</div>
                        <div class="day">Sat</div>
                        <div class="day">Sun</div>
                    </div>
                    <div class="calendar-content">
                        <div class="time-labels">
                            {times.map((t, i) => <CalendarTime time={t} key={i}/>)}
                        </div>
                        <div class="calendar-grid">
                            {times.map((t, i) => schedule.map((day, j) => <CalendarCell onClick={onClick} day={day} time={t} key={j}/>))}
                        </div>
                    </div>
                    
            </div>
        </>
    )
}

export default CalendarGrid;