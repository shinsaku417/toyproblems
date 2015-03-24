// write a function that takes arrays of names, and modifies the array
// such that 'jack' is always first and 'jill' is always second
var arrayOrder = function(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'jack') {
      var place = 0;
      for (var j = 0; j < array.length; j++) {
        if (array[j] !== 'jack') {
          place = j;
          break;
        }
      }
      if (place < i) {
        var temp = array[place];
        array[place] = 'jack';
        array[i] = temp;
      }
    }
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'jill') {
      var place;
      for (var j = 0; j < array.length; j++) {
        if (array[j] !== 'jack' && array[j] !== 'jill') {
          place = j;
          break;
        }
      }
      if (place !== undefined && place < i) {
        var temp = array[place];
        array[place] = 'jill';
        array[i] = temp;
      }
    }
  }
  return array;
};

module.exports = arrayOrder;
