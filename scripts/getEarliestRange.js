/**
 * Gets the earliest range encountered in the given keyRangesMap
 * Assuming that given ranges are sorted in ascending order
 *
 * @param keyRangesMap {Map<String, {start: Date, end: Date}[]>}
 * @returns {{start: Date, end: Date}[]}
 */
module.exports = function getEarliestRange(keyRangesMap) {
  const iterator = keyRangesMap[Symbol.iterator]()

  const [, ranges] = iterator.next().value;
  let earliestRange = ranges[0]

  let next = iterator.next();
  while (!next.done) {

    const [, ranges] = next.value;

    for (const range of ranges) {
      if (range.start <= earliestRange.start) {
        earliestRange = { ...range };
      }
    }

    next = iterator.next();
  }

  return earliestRange;
}
