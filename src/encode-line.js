const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';

  let resStr = "";
  let currentCount = 1;


  str.split('').reduce((prev, current) => {

    if (prev === current) {
      currentCount++

      return current;
    }

    currentCount === 1 ? resStr += prev : resStr += currentCount + prev;
    currentCount = 1;

    return current;

  });

  currentCount === 1 ? resStr += str[str.length - 1] : resStr += currentCount + str[str.length - 1];

  return resStr;
}

encodeLine('aaaatttt');

module.exports = {
  encodeLine
};
