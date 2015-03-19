// sum up the numbers in x, y range (inclusive) that are palindromes
var palindromeSum = function(x, y) {
  var result = 0;
  for (var i = x; i <= y; i++) {
    if (i.toString().split('').reverse().join('') === i.toString()) {
      result += i;
    }
  }
  return result;
};

module.exports = palindromeSum;
