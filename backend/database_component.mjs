import mongoose from "mongoose";
import 'dotenv/config';

// set up schema of the database
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
    if (existing == null){

        // Account doesn't already exist
        const newUser = new User(user_info);
        currentUser = user_info;
        return newUser.save();
        
    } else {

        // Account does exist, return null to generate an error
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

    const exisitng_user = await find_user(user_info);

    if (exisitng_user != null){

        // If an account was found in the database, set it to the current stored user
        currentUser = user_info;
    }

    // Returns the found account or a null value to generate an error
    return exisitng_user;
}

async function update_user(new_info){

    const update = await User.findOneAndUpdate(currentUser, new_info);

    if (update != undefined){

        // If the account is successfully found and updated, return the update account
        return find_user(currentUser);
    } else {

        // If not, return null to generate an error
        return null;
    }
}

export {User, connect, log_in, sign_up, update_user, return_current_user}