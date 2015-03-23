// implement a mergesort
var mergeSort = function(array) {
  if (array.length <= 1) {
    return array;
  }
  var left = [];
  var right = [];
  var mid = Math.floor(array.length / 2);
  for (var i = 0; i < mid; i++) {
    left.push(array[i]);
  }
  for (var i = mid; i < array.length; i++) {
    right.push(array[i]);
  }
  return merge(mergeSort(left), mergeSort(right));
};

var merge = function(left, right) {
  var result = [];
  while (left.length > 0 || right.length > 0) {
    if (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else if (left.length > 0) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result;
};

module.exports = mergeSort;
