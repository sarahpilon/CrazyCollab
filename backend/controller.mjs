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



// shared emails
let givenEmails = [];

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  //  await model.connect();
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

// Signing up
app.post('/collab/login', asyncHandler( async (req, res) => {

    const body = req.body;
    const user = await model.log_in(body);

    console.log("User: ", user);

    if (user != null){
        res.status(200).send(user);
    } else {
        res.status(404).send("Account doesn't exist.");
    }
}));

// Saving your schedule to database
// Shouldn't require username since will only be executed if logged in
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

// sending emails to backend
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

// Retrieving your schedule to database
app.get('/collab/schedule', asyncHandler( async (req, res) => {

    const response = await model.get_schedule();

    if (response != null) {

        res.status(200).send(response);
    } else {
        res.status(404).send("Failed to get schedule");
    }

}));

// Connecting to a room
app.get('/collab/#sessionid', asyncHandler( async (req, res) => {


}));

// sending emails to backend
export { givenEmails };