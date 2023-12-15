const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// function getCommonCharacterCount(s1, s2) {
//   let protoStr = s2;
//   let res = 0;
//   let i = 0;
//   let j = 0;

//   while (true) {
//     if (i >= s1.length) break;
//     if (s1[i] === protoStr[j]) {
//       res++
//       const id = protoStr.indexOf(s1[i], j);
//       protoStr = protoStr.slice(0, id) + protoStr.slice(id + 1);
//       i++;
//       j = 0;
//     } else if (j >= protoStr.length) {
//       j = 0;
//       i++
//     } else {
//       j++
//     }
//   }

//   return res;
// }

function getCommonCharacterCount(s1, s2) {
  const charCount1 = countCharacters(s1);
  const charCount2 = countCharacters(s2);

  let commonCount = 0;

  for (const char in charCount1) {
    if (charCount2[char]) {
      commonCount += Math.min(charCount1[char], charCount2[char]);
    }
  }

  return commonCount;
}

function countCharacters(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}


getCommonCharacterCount('aabcc', 'adcaa');

module.exports = {
  getCommonCharacterCount
};
