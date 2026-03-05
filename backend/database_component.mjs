// const mongoose = require("mongoose");

import mongoose from "mongoose";

// set up structure of the database
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    timezone:{type: String, default: "UTC"},
    schedule: {
        monday: [Number],
        tuesday: [Number],
        wednesday: [Number],
        thursday: [Number],
        friday: [Number],
        saturday: [Number],
        sunday: [Number],
    }
});

const User = mongoose.model("User", userSchema);

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
        console.log("Added new user: ", newUser);
        return newUser.save();
    } else {

        return null;
    }
}

async function log_in(user_info){

    console.log("Existing User info: ", user_info);
    const query = User.findOne(user_info);
    return query.exec();
}

async function update_user(user_info, new_info){

    const update = await User.findOneAndUpdate(user_info, new_info);

    if (update != undefined){
        return log_in(user_info);
    } else {
        return null;
    }
}


//module.exports = User;
export {User, connect, log_in, sign_up, update_user}