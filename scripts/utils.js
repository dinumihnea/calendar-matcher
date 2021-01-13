/**
 * Calculates the difference in milliseconds between from and to
 *
 * @param from {Date}
 * @param to {Date}
 * @returns {number}
 */
module.exports.getMillisecondsDiff = function (from, to) {
  return from.getTime() - to.getTime();
}

/**
 * Gets the earliest Date from the given Date args
 *
 * @param dates: {Date[]}
 * @returns {Date}
 */
module.exports.getMinDate = function (...dates) {
  let min = dates[0];

  for (let date of dates) {
    if (date < min) {
      min = date;
    }
  }

  return min;
}

/**
 * Gets the latest Date from the given Date args
 *
 * @param dates: {Date[]}
 * @returns {Date}
 */
module.exports.getMaxDate = function (...dates) {
  let min = dates[0];

  for (let date of dates) {
    if (date > min) {
      min = date;
    }
  }

  return min;
}

/**
 * Compares if given source range intersects the target range
 * Ranges can be represented either in Date or Number
 *
 * @param source {{start: Date | Number, end: Date | Number}}
 * @param target {{start: Date | Number, end: Date | Number}}
 *
 * @returns {boolean} true if source intersects target, false otherwise
 */
module.exports.isIntersected = function (source, target) {
  if (!source || !source.start || !source.end)
    throw new Error("Invalid source");

  if (!target || !target.start || !target.end)
    throw new Error("Invalid target");

  // source start
  const sourceStart = source.start;
  // source end
  const sourceEnd = source.end;

  // target start
  const targetStart = target.start;
  // target end
  const targetEnd = target.end;

  // target ----[===]----
  // source --[=======]--
  if (targetStart >= sourceStart && targetEnd <= sourceEnd)
    return true;

  // target --[====]-----
  // source -----[====]--
  if (targetStart <= sourceStart && targetEnd >= sourceStart && targetEnd <= sourceEnd)
    return true

  // target ----[=====]--
  // source --[=====]----
  if (targetStart >= sourceStart && targetStart <= sourceEnd && targetEnd >= sourceEnd)
    return true

  // target --[=======]--
  // source ----[===]----
  if (targetStart <= sourceStart && targetEnd >= sourceEnd)
    return true;

  return false;
}

/**
 *
 * @param d1 {Date}
 * @param d2 {Date}
 *  * @returns {boolean} true if d1 hase the same date as d2
 */
module.exports.isSameDate = function (d1, d2) {
  return d1.getFullYear() === d2.getFullYear()
    && d1.getMonth() === d2.getMonth()
    && d1.getDate() === d2.getDate()
}
