// Given string of a number, convert it into a number that you can perform operations on
var myParseInt = function(string) {
  var result = 0;
  var i = 0;
  var neg = false;
  if (string.charCodeAt(0) === 45) {
    neg = true;
    i++;
  }
  for (; i < string.length; i++) {
    var ascii = string.charCodeAt(i);
    var num = ascii - 48;
    if (neg) {
      result = result * 10 - num;
    } else {
      result = result * 10 + num;
    }
  }
  return result;
};

module.exports = myParseInt;
