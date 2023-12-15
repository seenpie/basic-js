const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.count = 0;
    this.deep = 0;
  }

  calculateDepth(arr) {

    this.preOrder(arr);
    console.log(this.count);
    return this.count;
  }

  preOrder(arr) {

    this.deep++

    for (const item of arr) {
      if (Array.isArray(item)) {
        this.preOrder(item);
      }
    }

    if (this.count < this.deep) {
      this.count = this.deep
    }

    this.deep = 1;
  }
}
const depthCalc = new DepthCalculator();

depthCalc.calculateDepth([[]]);

module.exports = {
  DepthCalculator
};
