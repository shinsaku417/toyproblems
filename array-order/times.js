var _ = require('underscore')

list_of_times = ["17:21", "23:50", "04:01", "03:03", "07:07", "00:01", "12:42", "16:03"];

// given list of times, find out closest times

var closest = function(times) {
  var original = times.slice();
  for (var i = 0; i < times.length; i++) {
    times[i] = convert(times[i]);
  }
  var result; // [i, j]
  var currentMin = 60*25;
  for (var i = 0; i < times.length; i++) {
    for (var j = 0; j < times.length; j++) {
      if (i !== j) {
        var first = times[i];
        var second = times[j];
        diff = time_diff(first, second);
        if (diff < currentMin) {
          currentMin = diff;
          result = [i, j];
        }
      }
    }
  }
  return [original[result[0]], original[result[1]]];
};

var time_diff = function(first, second) {
  var diff = Math.abs(first - second);
  if (diff > 12 * 60) {
    return diff = 24 * 60 - diff;
  }
  return diff;
}

var closestBetter = function(times) {
    times = times.sort();
    var original = times.slice();
    for (var i = 0; i < times.length; i++) {
      times[i] = convert(times[i]);
    }
    var result; // [i, j]
    var currentMin = 60*25;
    for (var i = 0; i < times.length - 1; i++) {
      if (i === 0) {
        var diff = time_diff(times[0], times[times.length - 1]);
        if (diff < currentMin) {
          currentMin = diff;
          result = [0, times.length - 1];
        }
      }
      var diff = time_diff(times[i], times[i + 1]);
      if (diff < currentMin) {
          currentMin = diff;
          result = [i, i + 1];
      }
    }
  return [original[result[0]], original[result[1]]];
}

// [5 7 2 13]
// [2 5 7 13]

// 11, 13 = 2
// 9, 15 = 6
// 7, 17 = 10
// 5, 19 = 10  => 14 * 60, 10 * 60

var convert = function(time) {
  var timeArr = time.split(':'); // [17, 21]
  return parseInt(timeArr[0]) * 60 + parseInt(timeArr[1]);
};

console.log(closestBetter(list_of_times));

// 12 * 60 => 1440
