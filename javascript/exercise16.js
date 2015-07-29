/**
 *  FUNCTIONAL JAVASCRIPT IS GOOD
 *  ───────────────────────────────
 *  Recursion
 *  Exercise 16 of 18
 *
 *
 *  # Task
 *
 *  Implement a recursive function that returns all of the unique dependencies, and sub-dependencies of a module, sorted alphabetically. Dependencies should be printed as dependency@version e.g. 'inflection@1.2.6'.
 *
 *  Multiple versions of the same module are allowed, but duplicates modules of the same version should be removed.
 *
 *  ## Arguments:
 *
 *   * tree: A dependency tree. See below for an example of the structure.
 *
 *  ## Example
 *
 *     var loremIpsum = {
 *       "name": "lorem-ipsum",
 *       "version": "0.1.1",
 *       "dependencies": {
 *         "optimist": {
 *           "version": "0.3.7",
 *           "dependencies": {
 *             "wordwrap": {
 *               "version": "0.0.2"
 *             }
 *           }
 *         },
 *         "inflection": {
 *           "version": "1.2.6"
 *         }
 *       }
 *     }
 *
 *     getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]
 *
 *  ## Conditions:
 *
 *   * Do not use any for/while loops.
 *
 *  ## Boilerplate
 *
 *
 *     function getDependencies(tree) {
 *       // SOLUTION GOES HERE
 *       // Note: Feel free to add additional arguments
 *       // to this function for use with recursive calls.
 *       // Or not! There are many ways to recurse.
 *     }
 *
 *     module.exports = getDependencies
 *
 *  ## Resources
 *
 *   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 *
 *
 *  » To print these instructions again, run: functional-javascript print
 *  » To execute your program in a test environment, run: functional-javascript run program.js
 *  » To verify your program, run: functional-javascript verify program.js
 *  » For help run: functional-javascript help
 */

module.exports = function getDependencies(tree) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse

  if (!tree) return [];
  else if (!tree['dependencies']) return [];
  var dependencies = tree['dependencies'];
  var dependenciesArr = [];
  if (dependencies) {
    dependenciesArr = Object.keys(dependencies).reduce(function (result, key) {
      result.push(key + '@' + dependencies[key]['version']);
      return result.concat(getDependencies(dependencies[key]));
    }, []);
  }

  return dependenciesArr.sort().filter(function (value, index, array) {
    return (value === array[index - 1]) ? false : true;
  });
};

/**
 *  Here's the official solution in case you want to compare notes:
 *
 *  ────────────────────────────────────────────────────────────────────────────────
 *      function getDependencies(mod, result) {
 *        result = result || []
 *        var dependencies = mod && mod.dependencies || []
 *        Object.keys(dependencies).forEach(function(dep) {
 *          var key = dep + '@' + mod.dependencies[dep].version
 *          if (result.indexOf(key) === -1) result.push(key)
 *          getDependencies(mod.dependencies[dep], result)
 *        })
 *        return result.sort()
 *      }
 *
 *      module.exports = getDependencies
 *
 *  ────────────────────────────────────────────────────────────────────────────────
 *
 */
