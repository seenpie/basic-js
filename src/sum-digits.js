const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
// function getSumOfDigits(n) {
//   const result = n.toString().split('').reduce((prev, curr) => {
//     return +prev + +curr;
//   }).toString();

//   // const test = result.split('')
//   if (result.split('').length >= 2) {
//     getSumOfDigits(result);
//   } else {
//     console.log(result);
//     return result;
//   }
// }

function getSumOfDigits(n) {
  let result = n.toString().split('');
  while(result.length >= 2) {
    result = result.reduce((prev, curr) => {
      return +prev + +curr;
    }).toString().split('');
  }
  return +result[0];
}

// getSumOfDigits(123);
getSumOfDigits(99);
// getSumOfDigits(35);
// getSumOfDigits(10);

module.exports = {
  getSumOfDigits
};
