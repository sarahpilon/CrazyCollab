/**
* Assuming the schedule takes this format as a JSON:
* {
*    monday: [8.25, 8.50, 8.75, 9.00, 10.00, 10.25, 10.50, 10.75, 11.00],
*    tuesday: [2.00, 2.25, 2.50, 2.75, 3.00],
*    ...
* }
*/


/**
 * Parses schedule to match database format if taken from
 * website, then makes schedule to match a universal timezone.
 * @param {*} scheduleJSON 
 * @returns updated schedule
 */
async function parseSchedule(scheduleJSON, timezone){
    try {
        // taken in scheduleJSON in correct format
        let formattedSchedule = {};

        // if taking in array of objects
        if (Array.isArray(scheduleJSON)) {
            for (const entry of scheduleJSON) {

                // if the entry has a valid day and time, store the formatted schedule
                if (entry && entry.name) {

                    // store the time if the day is valid and if not, set as empty array
                    if (Array.isArray(entry.time)) {

                        formattedSchedule[entry.name] = entry.time;
                    
                    } else {
                    
                        formattedSchedule[entry.name] = [];
                
                    }
                }

            }

        }

        // if taking data from dataset (already matches expected format)
        else if (typeof scheduleJSON === "object" && scheduleJSON !== null) {
            formattedSchedule = scheduleJSON;
        }

        // parsed Schedule
        const schedule = {

            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: []
        };

        // days of the week
        const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

        // Test for a valid schedule
        if (Object.keys(formattedSchedule).length !== 0) {

            /*
            For each object in scheduleJSON
                Find the field whose's name matches the value of the 'name' field
                Set it's value to the value of the 'time' field 
            */

            // go through json and store each day into a seperate bracket
            for (const day of days) {

                // set to an empty array if day isnt in schedule
                const times = formattedSchedule[day] || [];

                //  Move objects to array, and turn decimal into time
                schedule[day] = times.map(time => universal(time, timezone))
            }

        } else {
            return null;
        }
        

        return schedule;

    } catch (error) {
        console.error("Invalid data")
        return null;
    }
}


/**
 * Compares two schedules from two different users
 * @param {string} userA - User A data 
 * @param {string} userB - User B data 
 * @returns {Object[]} Conflicting dates list
 */
async function compareUsers(userA, userB) {

    try {

    const PasrsedA = await parseSchedule(userA.schedule, userA.timezone);
    const ParsedB = await parseSchedule(userB.schedule, userB.timezone);

    return compareSchedules(PasrsedA, ParsedB);
    
    } catch (error) {
        console.error("Schedule issue")
        return null;
    }
}


/*
    Logic / Non-Async Functions
    These functions are pure logic, and do not use await,
    fetch any data, and aren't asynchronous operations
*/


/**
 * Compares two schedules and returns conflicting times
 */
function compareSchedules(UserA, UserB) {

    const Timeconflicts = {};

    // for loop iterating through each day of the week
    for (const day in UserA) {
        // get user a schedule for that day and set to an array
        ScheduleA = UserA[day] || [];
        // get user b schedule 
        ScheduleB = UserB[day] || [];

        // use filter() to find times that are the same, and save to array
        Timeconflicts[day] = ScheduleA.filter(time => ScheduleB.includes(time))
    }

    // remove empty days
    for (const day in Timeconflicts) {
        if (Timeconflicts[day].length === 0) {
            delete Timeconflicts[day];
        }
    }

    
   
    // Return array ONLY if its populated, otherwise produce an error
    if (Object.values(Timeconflicts).every(day => day.length === 0)) {
        console.error("No suggested time found")
        return null;
    } else {
         // array should have conflicts, between the two, as well as the times with conflict
        // so return array
            return Timeconflicts;
    }

}


/**
 * Function to set the timezone to a universal time
 */
function universal(time, timezone) {


    // if the time was invalid, throw an error
    if (time >= 0 && time <= 23.99) {

    // timezone logic
    // create date for timezone logic
    const currentTime = new Date();

    const localString = currentTime.toLocaleString("en-US", { timeZone: timezone });
    const dateObject = new Date(localString);


    

    // set to hh:mm
    dateObject.setMinutes(+time * 60);
    // dateObject.setMinutes(Math.round(time * 60));
    // set to local time
    const result = dateObject.toLocaleString("en-US",
                    {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                        timeZone: timezone
                    }
                );

    
   
    // return final result
    return result


    } else {
        console.error("Invalid Time")
        return null;


    }
   
}

function BackToDecimal(t, timezone) {
    // split into hour minute
    const [hour, minute] = t.split(':').map(Number);

    // create date for timezone logic
    const currentTime = new Date();

    const localTime = currentTime.toLocaleString("en-US", {timeZone: timezone});
    const localDate = new Date(localTime);

    // set local time
    localDate.setHours(hour, minute, 0, 0);

    // get two values
    const localHour = localDate.getHours();
    const localMinute = localDate.getMinutes();

    // convert into fraction
    const fraction = localMinute / 60;

    // return ROUNDED answer
    return Number((localHour + fraction).toFixed(2));
}

/**
 * Parse schedule from database format into frontend format
 */

function parseScheduleFrontend(schedule, timezone) {
    let formattedSchedule = [
    {id: 0, name: "monday", time: []},
    {id: 1, name: "tuesday", time: []},
    {id: 2, name: "wednesday", time: []},
    {id: 3, name: "thursday", time: []},
    {id: 4, name: "friday", time: []},
    {id: 5, name: "saturday", time: []},
    {id: 6, name: "sunday", time: []}
    ]

    // days of the week
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

    for (const day of days) {

        // index of the day
        const dayIndex = days.indexOf(day);

        // check if the day has times 
        if (schedule[day] && Array.isArray(schedule[day])) {

            // if theres times add the times to the formatted schedule
            for (const time of schedule[day]){
                console.log(time);
                formattedSchedule[dayIndex].time.push(BackToDecimal(time, timezone)); // NEED TO SET TIME BACK TO DECIMAL AMOUNT
            }
            // formattedSchedule[dayIndex].time = schedule[day];
        } else {


            // set to empty array if day has no times
            formattedSchedule[dayIndex].time = [];
        }

    }

    console.log("Formatted schedule: ", formattedSchedule);

    return formattedSchedule;

}

// module.exports = {parseSchedule, compareSchedules, compareUsers, universal};

export {parseSchedule, compareSchedules, compareUsers, universal, parseScheduleFrontend};