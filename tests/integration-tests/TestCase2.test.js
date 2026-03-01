import mongoose from "mongoose";
import User from "../../backend/database_component.mjs";
import { getMeetingTimes } from "../../backend/user_logic.mjs";

beforeAll(async () => {
    // connect to a test database (NOT your real one)
    await mongoose.connect("mongodb://127.0.0.1:27017/crazycollab_test");
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});

test("Use case: Administrator gets suggested meeting times for professor", async () => {
    // Insert fake professor into test DB
    await User.create({
        username: "profA",
        password: "123",
        schedule: {
            monday: [8.25, 9.00],
            tuesday: [10.00],
            wednesday: [],
            thursday: [],
            friday: []
        }
    });

    // Administrator's schedule (input manually)
    const adminSchedule = {
        monday: [9.00, 10.00],
        tuesday: [10.00],
        wednesday: [],
        thursday: [],
        friday: []
    };

    // Run the full workflow
    const result = await getMeetingTimes(adminSchedule, "profA");

    // Expected suggested meeting times
    expect(result).toEqual({
        monday: ["09:00"],
        tuesday: ["10:00"]
    });
});
