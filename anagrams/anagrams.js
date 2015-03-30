// Given a word, return all anagrams of it including original one (no duplicates)
var anagrams = function(word) {
  var result = {};
  var subroutine = function(current, remaining) {
    if (current.length === word.length) {
      result[current] = true;
    } else {
      for (var i = 0; i < remaining.length; i++) {
        var strArr = remaining.split('');
        strArr.splice(i, 1);
        subroutine(current + remaining.charAt(i), strArr.join(''));
      }
    }
  };
  for (var i = 0; i < word.length; i++) {
    var strArr = word.split('');
    strArr.splice(i, 1);
    subroutine(word.charAt(i), strArr.join(''));
  }
  return Object.keys(result);
};

module.exports = anagrams;
