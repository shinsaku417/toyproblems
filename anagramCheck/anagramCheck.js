// Given two strings, determine whether they are anagrams

// O(N)
var anagramCheck = function(first, second) {
  var firstObj = {};
  var secondObj = {};
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    firstObj[first.charAt(i)] = true;
    secondObj[second.charAt(i)] = true;
  }
  if (Object.keys(firstObj).length !== Object.keys(secondObj).length) {
    return false;
  }
  for (var key in firstObj) {
    if (!secondObj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

// O(NlogN)
var anagramCheckLogN = function(first, second) {
  return first.split('').sort().join('') === second.split('').sort().join('');
};

// O(N^2)
var anagramCheckQuadratic = function(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  var checked = [];
  for (var i = 0; i < first.length; i++) {
    checked.push(false);
  }
  for (var i = 0; i < first.length; i++) {
    var found = false;
    for (var j = 0; j < second.length; j++) {
      if (first.charAt(i) === second.charAt(j) && !checked[j]) {
        found = true;
        checked[j] = true;
        break;
      }
    }
    if (!found) {
      return false;
    }
  }
  return true;
};

module.exports = {
  anagramCheck: anagramCheck,
  anagramCheckLogN: anagramCheckLogN,
  anagramCheckQuadratic: anagramCheckQuadratic
};
