const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resStr = '';
  let concat = '';
  const { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;
  // console.log(repeatTimes);

  for (let j = 0; j < additionRepeatTimes; j++) {
    if (j + 1 === additionRepeatTimes) {
      concat += `${addition}`;
    } else {
      concat += `${addition}${additionSeparator}`;
    }
  }

  for (let i = 0; i < repeatTimes; i++) {
    if (i + 1 === repeatTimes) {
      resStr += `${str}${concat}`;
    } else {
      resStr += `${str}${concat}${separator}`;
    }
  }
  return resStr;
}

module.exports = {
  repeater
};
