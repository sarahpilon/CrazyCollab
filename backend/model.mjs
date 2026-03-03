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
    return await database.sign_up(user_info);
}

async function log_in(user_info){
    return await database.log_in(user_info);
}

export {connect, log_in, sign_up}