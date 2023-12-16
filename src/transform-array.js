const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!")
  }

  const resultArr = [];

  let delNext = false;
  arr.forEach((elem, id) => {
    if (delNext) {
      delNext = !delNext;
      resultArr.push(-1);
      return -1;
    }
    if (elem === "--double-next") {
      if (arr[id + 1]) {
        resultArr.push(arr[id + 1]);
        return arr[id + 1];
      }
      arr.push(-1);
      return -1;
    }
    if (elem === "--double-prev") {
      if (arr[id - 1]) {
        return resultArr.push(resultArr[resultArr.length -1]);
      }
      resultArr.push(-1);
      return - 1;
    }
    if (elem === "--discard-next") {
      if(arr[id + 1]) {
        delNext = !delNext;
        resultArr.push(-1);
        return -1;
      }
      resultArr.push(-1);
      return -1;
    }
    if (arr[id + 1] === "--discard-prev" || elem === "--discard-prev") {
      resultArr.push(-1);
      return -1;
    }
    resultArr.push(elem);
    return elem;
  });

  return resultArr.filter(a => a !== -1);
}

// console.log(transform([ '--double-prev', 1, 2, 3 ]));
// console.log(transform([1, 2, 3, '--discard-next']));
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));
// transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));
// transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]);

module.exports = {
  transform
};
