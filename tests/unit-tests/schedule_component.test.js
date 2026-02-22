//sum.test.js
const { parseSchedule } = require("../../backend/schedule_component.mjs");
test('test of test', async () => {
    return expect(parseSchedule()).resolves.toBe(4)
})