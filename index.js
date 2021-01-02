const mergeRanges = require("./scripts/mergeRanges")
const getFreeSlots = require("./scripts/getFreeSlots")

const { mockMap1, mockMap2 } = require("./mocks");

const input = {
  start: new Date(2020, 11, 6, 10, 0),
  end: new Date(2020, 11, 6, 18, 30),
  duration: 30 * 60 * 1000
}

const mergedRanges = mergeRanges(mockMap1)
// const mergedRanges = mergeEntries(mockMap2)

const freeSlots = getFreeSlots(mergedRanges, input.start, input.end, input.duration)
console.log({ freeSlots })
