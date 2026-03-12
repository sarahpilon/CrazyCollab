import "dotenv/config"
import express from 'express';
import * as model from './model.mjs'
import asyncHandler from 'express-async-handler';
import cors from "cors";
import { SentEvent } from "./googleCalendarAPI.mjs";


const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: "true"
}));

app.use(express.json());

SentEvent(app);

// shared emails and info to send to google API
let givenEmails = [];
let givenDay = "";
let givenStart = "";
let givenEnd = "";
let timeZone;

const PORT = process.env.PORT;

// App start-up
app.listen(PORT, async () => {
    
    await model.connect(); // Connects to mongodb database
    console.log(`Server listening on port ${PORT}...`);
});

// Signing up
app.post('/collab/signup', asyncHandler( async (req, res) => {

    const body = req.body;
    const user = await model.sign_up(body);
    
    if (user != null){
        res.status(200).send(user);
    } else {
        res.status(404).send("Account already exists.");
    }
}));

// Logging in
app.post('/collab/login', asyncHandler( async (req, res) => {

    const body = req.body;
    const user = await model.log_in(body);

    if (user != null){
        res.status(200).send(user);
    } else {
        res.status(404).send("Account doesn't exist.");
    }
}));

// Saving your schedule to database
// Doesn't require username since it will only be executed if logged 
// in and the user info is saved to the database component
app.post('/collab/schedule', asyncHandler( async (req, res) => {
    
    const body = req.body; // schedule
    const schedule = body.schedule;

    const update = await model.post_schedule(schedule)

    if (update != null){
    
        res.status(200).send(update);
    }  else {
        res.status(404).send("Schedule post failed");
    }

}));

// Retrieving your schedule to database
// Doesn't require username since it will only be executed if logged 
// in and the user info is saved to the database component
app.get('/collab/schedule', asyncHandler( async (req, res) => {

    const response = await model.get_schedule();

    if (response != null) {

        res.status(200).send(response);
    } else {
        res.status(404).send("Failed to get schedule");
    }

}));

// sending emails to backend & auth
app.post('/collab/invite-emails', asyncHandler(async (req, res) => {
    try {
        // taken emails from host page popup
        const { emails } = req.body;

        console.log("emails:", emails);

        givenEmails = emails; // save for autorization callback

    } catch (err) {
        console.error("No emails ", err);
    }
}));

// sending meeting name, date and timezone to funct
app.post("/collab/google/createEvent", async (req, res) => {
    const { day, start, end, timezone } = req.body;
    
    givenDay = day;
    givenStart = start;
    givenEnd = end;
    timeZone = timezone


    res.json({ success: true });
});

// sending emails to backend
export { givenEmails, givenDay, givenStart, givenEnd, timeZone };