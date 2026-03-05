import * as database from './database_component.mjs';
import * as schedule_component from './schedule_component.mjs';
import 'dotenv/config';

/**
 * This function connects to the MongoDB server.
 */
async function connect(){
    return await database.connect();
}

async function sign_up(user_info){
    const user = await database.sign_up(user_info);

    return user;
}

async function log_in(user_info){
    
    const user = await database.log_in(user_info);

    const parsedSchedule = schedule_component.parseScheduleFrontend(user.schedule);

    const username = user.username;
    const password = user.password;
    const timezone = user.timezone;
    const _id = user._id;

    const returnedUser = {
        username,
        password,
        timezone,
        _id,
        schedule: 
            parsedSchedule
    }

    console.log("Returned user: ", returnedUser)

    return returnedUser;
}

async function post_schedule(newSchedule){
    
    const parsedSchedule = await schedule_component.parseSchedule(newSchedule);

    const newUserInfo = {
        schedule: [
            parsedSchedule
        ]
    }

    return await database.update_user(newUserInfo);

}

async function get_schedule(){

    const user = await database.return_current_user();

    console.log("Current user we're fetching shcedule from: ", user);

    if (user != null){

        return await schedule_component.parseScheduleFrontend(user.schedule);
    } else {
        return null;
    }

}

export {connect, log_in, sign_up, post_schedule, get_schedule}