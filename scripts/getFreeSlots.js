const utils = require("./utils");

/***
 * Validates the ranges based on given 'start' and 'end date and
 * searches for intervals (in between given 'ranges') that are grater then given 'duration'
 *
 * Assumes that all ranges are ordered in ascending order
 *
 * @param ranges - [{start, end}] array containing range entries
 * @param start - the earliest date to search for
 * @param end - the latest date to search for
 * @param duration - minimum duration for the free slots (in milliseconds)
 * @returns [{start, end}] shaped array with the intervals
 */
module.exports = function getFreeSlots(ranges, start, end, duration) {
  const outputInterval = [];

  let prev = start;
  for (let i = 0; i < ranges.length; i++) {
    const entry = ranges[i];


    if (entry.start >= end) {
      if (duration <= utils.getMillisecondsDiff(end, prev)) {
        outputInterval.push([prev, entry.start])
      }
      // exit for out of range entries
      break;
    }

    if (duration <= utils.getMillisecondsDiff(entry.start, prev)) {
      outputInterval.push([prev, entry.start])
    }

    prev = entry.end;
  }

  // find last interval when end is after the end of the last range
  const last = ranges[ranges.length - 1];
  if (last.end < end) {
    if (duration <= utils.getMillisecondsDiff(end, last.end)) {
      outputInterval.push([ranges[ranges.length - 1].end, end])
    }
  }

  return outputInterval;
}
