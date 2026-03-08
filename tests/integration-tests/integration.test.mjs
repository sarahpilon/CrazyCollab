import { compareUsers } from "../../backend/schedule_component.mjs";

test("See if compareUsers compares schedules", async () => {
    const UserA = {
        username: "testA",
        password: "pw",
        timezone: "America/Los_Angeles",
        monday: [8.25, 9.00],
        tuesday: [10.00]
    };

    const UserB = {
        username: "testB",
        password: "pw",
        timezone: "America/Los_Angeles",
        monday: [9.00, 10.00],
        tuesday: [10.00]
    };

    const result = await compareUsers(UserA, UserB);

    expect(result).toEqual({
        monday: ["09:00"],
        tuesday: ["10:00"]
    });
});
