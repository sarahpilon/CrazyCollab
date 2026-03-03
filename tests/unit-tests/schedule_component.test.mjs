// const { parseSchedule } = require("../../backend/schedule_component.mjs");
import {parseSchedule, universal} from "../../backend/schedule_component.mjs";


test('Empty data invalidation', async () => {
    return expect(parseSchedule()).resolves.toBe(null)
})

// Invalid inputs (straight from time function)
// const { universal } = require("../../backend/schedule_component.mjs");
test('Wrong time validation', () => {
    return expect(universal(25)).toBe(null)
})