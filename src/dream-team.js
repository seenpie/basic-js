const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// function createDreamTeam(members) {
//   if (!Array.isArray(members)) return false;
//   const abbr = [];
//   members.forEach(member => {
//     if (typeof member === 'string') {
//       abbr.push(member.trim()[0].toUpperCase());
//     }
//   });
//   return abbr.sort().join('');
// }

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
  const abbr = members
    .filter(member => typeof member === 'string')
    .map(member => member.trim()[0].toUpperCase())
    .sort()
    .join('');
  
  return abbr;
}

module.exports = {
  createDreamTeam
};
