// implement a postfix calculator
var operators = {
  '+': true,
  '-': true,
  '*': true,
  '/': true,
  '%': true
};

var isOperator = function(val) {
  return operators.hasOwnProperty(val);
};

var calculate = function(first, second, operator) {
  if (operator === '+') {
    return first + second;
  }
  if (operator === '-') {
    return first - second;
  }
  if (operator === '*') {
    return first * second;
  }
  if (operator === '/') {
    return first / second;
  }
  if (operator === '%') {
    return first % second;
  }
};

var postfix = function(string) {
  var strArray = string.split(' ');
  var stack = [];
  for (var i = 0; i < strArray.length; i++) {
    var val = strArray[i];
    if (isOperator(val)) {
      var second = parseInt(stack.pop());
      var first = parseInt(stack.pop());
      stack.push(calculate(first, second, val));
    } else {
      stack.push(val);
    }
  }
  return stack.pop();
};

module.exports = postfix;
