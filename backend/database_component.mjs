import mongoose from "mongoose";

// Generated connection string 
const ConnectionString = "mongodb+srv://Professor:test@crazycollab.sgopi0u.mongodb.net/CrazyCollab?retryWrites=true&w=majority";
mongoose.connect(ConnectionString)

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

export default User;