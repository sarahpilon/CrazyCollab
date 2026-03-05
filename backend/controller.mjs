import "dotenv/config"
import express from 'express';
import * as model from './model.mjs'
import asyncHandler from 'express-async-handler';

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    await model.connect();
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