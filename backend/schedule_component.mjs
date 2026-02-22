

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
    return 4;  // made test expect a 4 just to test if it would work
    // return scheduleJSON // for test to run
    // 
}


/**
 * Compares two schedules from two different users
 * @param {string} userA - User A data 
 * @param {string} userB - User B data 
 * @returns {Object[]} Conflicting dates list
 */
async function compareUsers(userA, userB) {
    const a = await parseSchedule(userA);
    const b = await parseSchedule(userB);

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

    // for loop iterating through each day of the week
        // get user a schedule for that day and set to an array
        // get user b schedule 

        // use filter() to find times that are the same, and save to array

   // array should have conflicts, between the two, as well as the times with conflict
   // so return array

}

module.exports = {parseSchedule, compareSchedules, compareUsers};