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
function getDNSStats(domains) {
    let result = {};
    let arr1 = [];
    for (let i = 0; i < domains.length; i++) {
        arr1 = domains[i].split('.')
        let str = '';
        for (let j = arr1.length - 1; j >= 0; j--) {
            str += `.${arr1[j]}`;
            if (isNaN(result[str])) {
                result[str] = 1;
            } else
                result[str] += 1;
        }
    }
    return result;
}

module.exports = {
    getDNSStats
};