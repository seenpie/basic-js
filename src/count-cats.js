const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// function countCats(matrix) {
//   let cats = 0;
//   matrix.forEach(el => {
//     el.forEach(item => item == "^^" ? cats++ : null)
//   });
//   return cats;
// }

function countCats(matrix) {
  return matrix.reduce((totalCats, row) => {
    return totalCats + row.reduce((rowCats, item) => {
      return item === "^^" ? rowCats + 1 : rowCats;
    }, 0);
  }, 0);
}

module.exports = {
  countCats
};
