const utils = require("./utils");
const getEarliestRange = require("./getEarliestRange");

/**
 * Merges the ranges from given input that intersects with each other
 *
 * @param input {Map<String, {start: Date, end: Date}[]>} a key - ranges map
 * @returns {[]} An array with all intersected ranges
 */
module.exports = function mergeRanges(input) {
  const keyRangesMap = new Map(input);
  const mergedRanges = [];

  while (keyRangesMap.size > 0) {
    // Start from the earliest range in the current map
    const currentRange = { ...getEarliestRange(keyRangesMap) }

    for (const [key, ranges] of keyRangesMap) {
      const afterCurrentRangeEntries = [];

      for (const entryRange of ranges) {
        if (utils.isIntersected(currentRange, entryRange)) {
          // Expand the currentRange if it intersects the entry
          currentRange.start = utils.getMinDate(currentRange.start, entryRange.start);
          currentRange.end = utils.getMaxDate(currentRange.end, entryRange.end);
        } else {
          // Keep entry after the range.end for the next iterations
          afterCurrentRangeEntries.push(entryRange);
        }
      }

      if (!afterCurrentRangeEntries.length) {
        // Remove entries without ranges left
        keyRangesMap.delete(key);
      } else {
        // Reduce entry ranges that were used
        keyRangesMap.set(key, afterCurrentRangeEntries);
      }
    }

    mergedRanges.push(currentRange);
  }

  return mergedRanges;
}
