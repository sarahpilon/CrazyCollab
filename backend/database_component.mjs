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
    console.log(user_info);
    console.log(existing);
    if (existing[0] == undefined){

        console.log("No existing account");
        const newUser = new User(user_info);
        console.log(newUser);
        return newUser.save();
    } else {

        return null;
    }
}

async function log_in(user_info){

    const query = User.find(user_info);
    return query.exec();

}


//module.exports = User;
export {User, connect, log_in, sign_up}