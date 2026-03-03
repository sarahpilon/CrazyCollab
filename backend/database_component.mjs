const mongoose = require("mongoose");

// set up structure of the database
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: String,
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

const User= mongoose.model("User", userSchema);

// module.exports = User;

export {User};