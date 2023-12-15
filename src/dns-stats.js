const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
// function getDNSStats(domains) {

//   const stats = {};

//   for (const dns of domains) {
//     const currDns = dns.split('.');
//     let concat = '';

//     for (const str of currDns.reverse()) {
//       stats[concat + "." + str] = (stats[concat + "." + str] || 0) + 1;
//       concat = concat + "." + str;
//     }
//   }

//   return stats;
// }

function getDNSStats(domains) {
  return domains.reduce((stats, dns) => {
    const parts = dns.split('.').reverse();
    parts.reduce((concat, part) => {
      const domain = concat + '.' + part;
      stats[domain] = (stats[domain] || 0) + 1;
      return domain;
    }, '');
    return stats;
  }, {});
}

getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']);

module.exports = {
  getDNSStats
};
