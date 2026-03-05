import * as database from './database_component.mjs';
import * as schedule from './schedule_component.mjs';
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

    return user;
}

async function post_schedule(user, newSchedule){
    
    const parsedSchedule = await schedule.parseSchedule(newSchedule);

    const newUserInfo = {
        ...user,
        schedule: [
            parsedSchedule
        ]
    }

    return await database.update_user(user, newUserInfo);

}

export {connect, log_in, sign_up, post_schedule}