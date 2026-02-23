const { compareUsers } = require("../../backend/schedule_component.mjs");

test("Integration: compareUsers parses and compares schedules", async () => {
    const fakeUserA = {
        monday: [8.25, 9.00],
        tuesday: [10.00]
    };

    const fakeUserB = {
        monday: [9.00, 10.00],
        tuesday: [10.00]
    };

    const result = await compareUsers(fakeUserA, fakeUserB);

    expect(result).toEqual({
        monday: ["09:00"],   // parsed + matched
        tuesday: ["10:00"]
    });
});
