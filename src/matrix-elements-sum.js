const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  const matrixLength = matrix.length;
  const matrixItemLength = matrix[0].length;
  let i = 0;
  let j = 0;

  while (true) {
    if (j >= matrixItemLength) break;
    if (i >= matrixLength) {
      i = 0;
      j++;
    }
    if (matrix[i][j]) {
      res += matrix[i][j];
      i++;
    } else {
      j++;
      i = 0;
    }
  }

  return res;
}

// function getMatrixElementsSum(matrix) {
//   let res = 0;

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (i === 0 || matrix[i - 1][j] !== 0) {
//         res += matrix[i][j];
//       }
//     }
//   }
//   return res;
// }

module.exports = {
  getMatrixElementsSum
};
