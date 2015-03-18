// given a string, find all permutations of it
var permutations = function(string) {
  var results = {};

  var findRemaining = function(str, index) {
    var strArr = str.split('');
    strArr.splice(index, 1);
    return strArr.join('');
  };

  var subroutine = function(current, remaining) {
    if (current.length === string.length) {
      results[current] = true;
      return;
    }
    for (var i = 0; i < remaining.length; i++) {
      subroutine(current + remaining.charAt(i), findRemaining(remaining, i));
    }
  };

  for (var i = 0; i < string.length; i++) {
    var remaining = findRemaining(string, i);
    subroutine(string.charAt(i), remaining);
  }

  return Object.keys(results);
};

module.exports = permutations;
