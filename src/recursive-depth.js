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
    calculateDepth( /*a*/ ) {

        throw new NotImplementedError('Not implemented');
        /*
                const maxDepth = (a) => {
                    let maxVal = Number.MIN_VALUE
                    let item

                    a.forEach(val => {
                        let depth = max(val)
                        if (depth > maxVal) {
                            maxVal = depth
                            item = val
                        }
                    })

                    return item
                };

                const max = (a, count = 0) =>
                    Array.isArray(a) ? max(maxDepth(a), count + 1) : count;

                return max(a);
                */
    };
}

module.exports = {
    DepthCalculator
};