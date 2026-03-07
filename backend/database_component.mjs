// const mongoose = require("mongoose");

import mongoose from "mongoose";
import 'dotenv/config';

// set up structure of the database
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    timezone:{type: String, default: "UTC"},
    schedule: {
        monday: [String],
        tuesday: [String],
        wednesday: [String],
        thursday: [String],
        friday: [String],
        saturday: [String],
        sunday: [String],
    }
});

const User = mongoose.model("User", userSchema);

let currentUser;

// module.exports = User;
let connection = undefined;

async function connect(){

    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING);
        connection = mongoose.connection;
        console.log("Successfully connected to MongoDB using Mongoose!");
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

async function sign_up(user_info){
    
    const existing = await log_in(user_info);
    console.log("New User info: ", user_info);
    console.log("Existing matching user: ", existing);
    if (existing == null){

        console.log("No existing account");
        const newUser = new User(user_info);
        currentUser = user_info;
        console.log("Added new user: ", newUser);
        return newUser.save();
    } else {

        return null;
    }
}

async function find_user(user_info){

    const query = User.findOne(user_info).exec();
    return query;
}

async function return_current_user(){

    return await find_user(currentUser);
}

async function log_in(user_info){

    console.log("Existing User info: ", user_info);
    const exisitng_user = await find_user(user_info);
    console.log("Found user: ", exisitng_user);

    if (exisitng_user != null){

        currentUser = user_info;
    }

    return exisitng_user;
}

async function update_user(new_info){

    const update = await User.findOneAndUpdate(currentUser, new_info);

    if (update != undefined){
        return find_user(currentUser);
    } else {
        return null;
    }
}


//module.exports = User;
export {User, connect, log_in, sign_up, update_user, return_current_user}