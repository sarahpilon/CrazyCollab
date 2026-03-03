// const mongoose = require("mongoose");
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import mongoose from "mongoose";

=======
import "dotenv/config"
import mongoose from "mongoose";
>>>>>>> Stashed changes
=======
import "dotenv/config"
import mongoose from "mongoose";
>>>>>>> Stashed changes
=======
import "dotenv/config"
import mongoose from "mongoose";
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
// module.exports = User;

export {User};
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
export {User, connect, log_in, sign_up}
>>>>>>> Stashed changes
=======
export {User, connect, log_in, sign_up}
>>>>>>> Stashed changes
=======
export {User, connect, log_in, sign_up}
>>>>>>> Stashed changes
