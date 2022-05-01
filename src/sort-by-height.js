const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

    let indexOfMinusOne = arr.reduce(function(a, e, i) {
        if (e === -1)
            a.push(i);
        return a;
    }, []);

    let filtered = arr.filter(function(value, index, arr) {
        console.log(index);
        return value != -1;
    }).sort(function(a, b) {
        return a - b;
    });

    for (let i = 0; i < indexOfMinusOne.length; i++) {
        filtered.splice(indexOfMinusOne[i], 0, -1);
    }
    return filtered;
}

module.exports = {
    sortByHeight
};