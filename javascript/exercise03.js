/**
 *  FUNCTIONAL JAVASCRIPT IS GOOD
 *  ───────────────────────────────
 *  Basic: Map
 *  Exercise 3 of 18
 *
 *
 *  # Task
 *
 *  Convert the following code from a for-loop to Array#map:
 *
 *     function doubleAll(numbers) {
 *       var result = []
 *       for (var i = 0; i < numbers.length; i++) {
 *         result.push(numbers[i] * 2)
 *       }
 *       return result
 *     }
 *
 *     module.exports = doubleAll
 *
 *  ## Arguments
 *
 *   * numbers: An Array of 0 to 20 Integers between 0 and 9
 *
 *  ## Conditions
 *
 *   * Your solution should use Array.prototype.map()
 *   * Do not use any for/while loops or Array.prototype.forEach.
 *   * Do not create any unecessary functions e.g. helpers.
 *
 *  ## Resources
 *
 *   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 *  ## Boilerplate
 *
 *     function doubleAll(numbers) {
 *       // SOLUTION GOES HERE
 *     }
 *
 *     module.exports = doubleAll
 *
 *
 *  » To print these instructions again, run: functional-javascript print
 *  » To execute your program in a test environment, run: functional-javascript run program.js
 *  » To verify your program, run: functional-javascript verify program.js
 *  » For help run: functional-javascript help
 */

module.exports = function doubleAll(numbers) {
  return numbers.map(function (number) {
    return number * 2;
  });
};

/**
 *  Here's the official solution in case you want to compare notes:
 *
 *  ────────────────────────────────────────────────────────────────────────────────
 *      module.exports = function doubleAll(numbers) {
 *        return numbers.map(function double(num) {
 *          return num * 2
 *        })
 *      }
 *
 *  ────────────────────────────────────────────────────────────────────────────────
 *
 */
