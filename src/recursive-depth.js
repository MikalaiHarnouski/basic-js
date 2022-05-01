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
    calculateDepth(a) {

        let maxDepth = 0;
        let currentLevel = 0;

        const max = (arr, isInternalRun = false) => {
            if (!isInternalRun) {
                maxDepth = 0;
                currentLevel = 0;
            }
            if (arr instanceof Array) {
                currentLevel += 1;
                arr.forEach(x => {
                    if (x instanceof Array) {
                        max(x, true);
                    }
                });
                if (currentLevel > maxDepth) maxDepth = currentLevel;
                currentLevel -= 1;
            }
            return maxDepth;
        }

        return max(a);
    };
}

module.exports = {
    DepthCalculator
};