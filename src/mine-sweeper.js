const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  const matrixLength = matrix.length;
  const resArr = JSON.parse(JSON.stringify(matrix));
  let i = 0;
  let j = 0;
  let currentItem;
  let currentValue = 0;

  while (true) {

    currentItem = matrix[i][j];

    if (currentItem === undefined) {
      i++
      j = 0;
    };

    if (i >= matrixLength) break;

    const right = matrix[i][j + 1];
    const left = matrix[i][j - 1] || false;
    const top = (i - 1 >= 0) ? matrix[i - 1][j] : false;
    const bottom = (i + 1 < matrix.length) ? matrix[i + 1][j] : false;
    const topRight = (i - 1 >= 0) ? matrix[i - 1][j + 1] || false : false;
    const bottomRight = (i + 1 < matrix.length) ? matrix[i + 1][j + 1] || false : false;
    const topLeft = (i - 1 >= 0) ? matrix[i - 1][j - 1] || false : false;
    const bottomLeft = (i + 1 < matrix.length) ? matrix[i + 1][j - 1] || false : false;

    const checks = [right, left, top, bottom, topRight, topLeft, bottomRight, bottomLeft];

    for (const check of checks) {
      if (check) {
        currentValue++;
      }
    }

    resArr[i][j] = currentValue;
    currentValue = 0;

    j++
  }

  return resArr;
}

module.exports = {
  minesweeper
};
