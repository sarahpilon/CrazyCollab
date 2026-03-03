
/**
// const mongoose = require("mongoose");
// const { MongoMemoryServer } = require("mongodb-memory-server");
// const User = require("../../backend/database_component.mjs");
// const { getMeetingTimes } = require("../../backend/userLogic.mjs");
 */

import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import {User} from "../../backend/database_component.mjs";
import {getMeetingTimes} from "../../backend/userLogic.mjs";


let mongo;

beforeAll(async () => {
    mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();
    await mongoose.connect(uri);
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongo.stop();
});


test("Use case: Administrator gets suggested meeting times for professor", async () => {
    await User.create({
        username: "profA",
        password: "123",
        schedule: {
            monday: [8.25, 9.00],
            tuesday: [10.00],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: []
        }
    });

    const adminSchedule = {
        monday: [9.00, 10.00],
        tuesday: [10.00],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
    };

    const result = await getMeetingTimes(adminSchedule, "profA");

    expect(result).toEqual({
        monday: ["09:00"],
        tuesday: ["10:00"]
    });
});
