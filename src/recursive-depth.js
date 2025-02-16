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

    maxDepth = 0;
    currentLevel = 0;
    calculateDepth(arr, isStart = false) {

        if (!isStart) {
            this.maxDepth = 0;
            this.currentLevel = 0;
        }
        if (arr instanceof Array) {
            this.currentLevel += 1;
            arr.forEach(x => {
                if (x instanceof Array) {
                    this.calculateDepth(x, true);
                }
            });
            if (this.currentLevel > this.maxDepth) this.maxDepth = this.currentLevel;
            this.currentLevel -= 1;
        }
        return this.maxDepth;
    };
}

module.exports = {
    DepthCalculator
};