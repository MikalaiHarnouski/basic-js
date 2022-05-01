const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arrString = String(n).split('');
    let result = 0;
    for (let i = 0; i < arrString.length; i++) {
        let copyOfArrString = arrString.slice();
        copyOfArrString.splice(i, 1);
        result = Math.max(result, +copyOfArrString.join(''))
    }
    return result;
}

module.exports = {
    deleteDigit
};