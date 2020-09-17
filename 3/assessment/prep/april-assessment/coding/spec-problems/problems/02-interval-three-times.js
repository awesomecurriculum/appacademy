/***********************************************************************
Write a function `intervalThreeTimes` that accepts a callback and a delay in
milliseconds. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed exactly three times.

Examples

intervalThreeTimes(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals a total of 3 times

intervalThreeTimes(function() {
    console.log('bye');
}, 1000); // prints 'bye' at 1000ms intervals a total of 3 times
***********************************************************************/

const intervalThreeTimes = (cb, del) => {
  count = 3;
  const interval = setInterval(() => {
    if (count > 0) {
      count--;
      return cb();
    }
    clearInterval(interval);
  }, del);
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalThreeTimes;
} catch {
  module.exports = null;
}
