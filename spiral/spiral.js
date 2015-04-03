// given 2D array, traverse it spirally
var spiral = function(arr) {
  var result = [];
  var minHor = 0;
  var maxHor = arr[0].length - 1;
  var minVer = 0;
  var maxVer = arr.length -1;
  while (minHor <= maxHor && minVer <= maxVer) {
    for (var i = minHor; i <= maxHor; i++) {
      result.push(arr[minVer][i]);
    }
    minVer++;

    for (var i = minVer; i <= maxVer; i++) {
      result.push(arr[i][maxHor]);
    }
    maxHor--;

    for (var i = maxHor; i >= minHor; i--) {
      result.push(arr[maxVer][i]);
    }
    maxVer--;

    for (var i = maxVer; i >= minVer; i--) {
      result.push(arr[i][minHor]);
    }
    minHor++;
  }
  return result;
};

module.exports = spiral;
