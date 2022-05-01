const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if (date) {

        if (Object.keys(date).length > 0 || !(date instanceof Date)) { throw new Error('Invalid date!'); }


        if ([0, 1, 11].indexOf(date.getMonth()) > -1) {
            return 'winter';
        }

        if ([2, 3, 4].indexOf(date.getMonth()) > -1) {
            return 'spring';
        }

        if ([5, 6, 7].indexOf(date.getMonth()) > -1) {
            return 'summer';
        }

        if ([8, 9, 10].indexOf(date.getMonth()) > -1) {
            return 'autumn';
        }
    } else { return 'Unable to determine the time of year!' };
}

module.exports = {
    getSeason
};