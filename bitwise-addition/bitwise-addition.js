// implement addition using bitwise operator
var bitwiseAdd = function(x, y) {
  var result = '';
  var bitX = x.toString(2);
  var bitY = y.toString(2);
  var len = Math.max(bitX.length, bitY.length);
  var up = 0;
  for (var i = len - 1; i >= 0; i--) {
    var charX = parseInt(bitX.charAt(i));
    var charY = parseInt(bitY.charAt(i));
    if ((charX && charY) && up) {
      result = '1' + result;
      up = 1;
    } else if ((charX && charY) && !up) {
      result = '0' + result;
      up = 1;
    } else if ((charX || charY) && up) {
      result = '0' + result;
      up = 1;
    } else if ((charX || charY) && !up) {
      result = '1' + result;
      up = 0;
    } else if (up) {
      result = '1' + result;
      up = 0;
    } else {
      result = '0' + result;
      up = 0;
    }
  }
  if (up) {
    result = '1' + result;
  }
  return parseInt(result, 2);
}

module.exports = {
  bitwiseAdd: bitwiseAdd
};
