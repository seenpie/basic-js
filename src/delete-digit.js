const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(n) {

//   let max = 0;
//   let str = n.toString();

//   for (const char of str) {
//     const id = str.indexOf(char);
//     const compareStr = str.slice(0, id) + str.slice(id + 1);
//     max = max > +compareStr ? max : +compareStr; 
//   }

//   return max;

// }

function deleteDigit(n) {
  const str = n.toString();
  return Math.max(...str.split('').map((_, i) => +str.slice(0, i) + str.slice(i + 1)));
}


module.exports = {
  deleteDigit
};
