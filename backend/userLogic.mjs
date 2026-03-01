/**
 * 
 * User Logic for combining database and schedule component
 * 
 */

import User from "./database_component.mjs";
import * as schedule from "./schedulecomponent.mjs";

export async function getUserSchedule(username) {
    try {

        // Find the user
        const user = await User.findOne({ username: username });
        
        // ensure the user has a schedule and exists
        if (user && user.schedule) {
            
            return user.schedule;
    
        } else if (!user || !user.schedule) {

            console.error("User has no schedule or doesn't exist")
            return null;
    
        }

    } catch (error) {

        console.error("Database error", error);

        return null;

    }
}


export async function getMeetingTimes(userASchedule, userB) {
    try {
        // get both added users schedule comparison
        const userBSchedule = await getUserSchedule(userB);

        // if the schedule was recieved, compare and return conflicts
        if (userBSchedule) {

            return schedule.compareUsers(userASchedule, userBSchedule);
        
        }
    } catch (error) {

        console.error("Error getting meeting times", error);
        return null;

    }
}



export {getUserSchedule, getMeetingTimes};