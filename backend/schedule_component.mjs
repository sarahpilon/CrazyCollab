

/**
* Assuming the schedule takes this format as a JSON:
* {
*    monday: [8.25, 8.50, 8.75, 9.00, 10.00, 10.25, 10.50, 10.75, 11.00],
*    tuesday: [2.00, 2.25, 2.50, 2.75, 3.00],
*    ...
* }
*
*     Note: I added some function parameters and commented some pseduocode for how i assume
*    the functions would be done. I just use jsdoc for a reference as thats what
*    our stylesheet was based off of. (https://jsdoc.app/tags-param)
*
*     Note 2: Also, was not quite sure what parse schedule would parse, so I just assumed
*    it would parse the time into a universal timezone (even if it just parses from decimal to
*    an actual time, I think it might be good to have it be for both)
*
*/


/**
 * Parses schedule to match a universal timezone.
 * @param {*} scheduleJSON 
 * @returns updated schedule
 */
async function parseSchedule(scheduleJSON){
    try {

        // parsed Schedule
        const schedule = {};

        // days of the week
        const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

        // Test for a valid schedule
        if (Object.keys(scheduleJSON).length !== 0) {

            // go through json and store each day into a seperate bracket
            for (const day of days) {

                // set to an empty array if day isnt in schedule
                const times = scheduleJSON[day] || [];

                //  Move objects to array, and turn decimal into time
                schedule[day] = times.map(time => universal(time))
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

    const PasrsedA = await parseSchedule(userA);
    const ParsedB = await parseSchedule(userB);

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
function universal(time) {

    // if the time was invalid, throw an error
    if (time >= 0 && time <= 23.99) {

    // get time string to date object
    var dateObject = new Date(0,0);

    // set to hh:mm
    dateObject.setMinutes(+time * 60);
    
    // set to local time
    const result = dateObject.toLocaleTimeString("en-US",
                    {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false
                    }
                );
    
    // return final result
    return result

    } else {
        console.error("Invalid Time")
        return null;

    }
    
}




module.exports = {parseSchedule, compareSchedules, compareUsers, universal};