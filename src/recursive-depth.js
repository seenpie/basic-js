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
    if (!Array.isArray(arr)) {
      return;
    }

    if (Array.isArray(arr)) {
      this.deep++
      for (const item of arr) {
        this.calculateDepth(item);
      }
      if (this.count < this.deep) {
        this.count = this.deep;
      }
      this.deep--
    }

    if (!this.deep) {
      const result = this.count;
      this.count = 0;
      this.deep = 0;
      return result;
    }
  }
}
const depthCalc = new DepthCalculator();

// depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]);
// depthCalc.calculateDepth([1, 2, 3, 4, 5, [1]]);
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]);
// depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]);
// depthCalc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]);
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]);
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]);
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]);

module.exports = {
  DepthCalculator
};
