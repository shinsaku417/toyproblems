// swap two numbers without using temp variable
var swap = function(first, second) {
  second = second - first;
  first = first + second;
  second = first - second;
  return [first, second];
};

module.exports = swap;
