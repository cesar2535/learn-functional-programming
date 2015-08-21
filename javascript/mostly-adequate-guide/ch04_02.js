var curry = require('lodash').curry;

var match = curry(function (what, x) {
  return x.match(what);
});

var replace = curry(function (what, replacement, x) {
  return x.replace(what, replacement);
});

var filter = curry(function (f, xs) {
  return xs.filter(f);
});

var map = curry(function (f, xs) {
  return xs.map(f);
});

console.log("match 1", match(/\s+/g, "hello world"));
console.log("match 2", match(/\s+/g)("hello world"));

var hasSpaces = match(/\s+/g);
console.log("match 3", hasSpaces("hello world"));
console.log("match 4", hasSpaces("spaceless"));

console.log('filter 1', filter(hasSpaces, ['tori_spelling', 'tori spelling']));

var findSpaces = filter(hasSpaces);
console.log('filter 2', findSpaces(['tori_spelling', 'tori spelling']));

var noVowels = replace(/[aeiou]/ig);
var censored = noVowels("*");
console.log('censored', censored("Chocolate Rain"));
