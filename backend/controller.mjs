import express from 'express';
import * as model from './model.mjs'
import asyncHandler from 'express-async-handler';
import expressAsyncHandler from 'express-async-handler';

const PORT = 3000;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

// Logging into database / account
app.post('/collab/login', asyncHandler( async (req, res) => {

    // Call database component to verify and get account credentials / data
    res.status(200).send("Logged in");
}));

// Saving your schedule to database
app.post('/collab/schedule', asyncHandler( async (req, res) => {
    

}));

// Retrieving your schedule to database
app.get('/collab/schedule', asyncHandler( async (req, res) => {


}));

// Connecting to a room
app.get('/collab/#sessionid', asyncHandler( async (req, res) => {


}));

app.get('/meeting/#sessionid', asyncHandler( async (req, res) => {

    console.log("Link has a session id");
}))