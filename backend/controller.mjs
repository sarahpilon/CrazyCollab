import express from 'express';
import * as model from './model.mjs'
import asyncHandler from 'express-async-handler';
import expressAsyncHandler from 'express-async-handler';

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.static('frontend'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});


app.post('/home', asyncHandler( async (req, res) => {

    res.status(203).send("Logged in"); // model.log_in(req.body)
}));
