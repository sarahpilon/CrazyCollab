

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

        // go through json and store each day into a seperate bracket
        for (const day in scheduleJSON) {

            //  Move objects to array, and turn decimal into time
            schedule[day] = scheduleJSON[day].map(time => universal(time))

        }

        return schedule;

    } catch (error) {
        console.error("invalid data")
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
    const ScheduleA = 0 // retrieve schedule
    const ScheduleB = 0 // retrieve schedule

    const PasrsedA = await parseSchedule(ScheduleA);
    const ParsedB = await parseSchedule(ScheduleB);

    return compareSchedules(a, b);
}


/*
    Logic / Non-Async Functions
    These functions are pure logic, and do not use await,
    fetch any data, and aren't asynchronous operations
*/


/**
 * Compares two schedules and returns conflicting times
 */
function compareSchedules(userA, userB) {

    const Timeconflicts = []

    // for loop iterating through each day of the week
    for ()
        // get user a schedule for that day and set to an array
        // get user b schedule 

        // use filter() to find times that are the same, and save to array

   // array should have conflicts, between the two, as well as the times with conflict
   // so return array

}


/**
 * 
 */
function universal(time) {

    // get time string to date object
    var dateObject = new Date(0,0);

    // set to hh:mm
    dateObject.setMinutes(+time * 60);
    
    // set to local time
    dateObject.toLocaleString

    // cut off the date part
    var result = dateObject.toTimeString().slice(0, 5);



    return result
}




module.exports = {parseSchedule, compareSchedules, compareUsers};