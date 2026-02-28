const { compareUsers } = require("../../backend/schedule_component.mjs");

// name of test
test("See if compare Users compares schedules", async () => {
    // create fake test user objects
    const UserA = {
        monday: [8.25, 9.00],
        tuesday: [10.00]
    };

    const UserB = {
        monday: [9.00, 10.00],
        tuesday: [10.00]
    };
    
    // compare the fake test users
    const result = await compareUsers(UserA, UserB);

    // what you would expect from the test
    expect(result).toEqual({
        monday: ["09:00"], 
        tuesday: ["10:00"]
    });
});



