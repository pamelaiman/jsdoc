/**
 * @function {asNegative} - writes out the input number as negative (if it isn't already)
 * @param {number} n - input number
 * @return {number} - n as a negative
 */

function asNegative(n) {
  if (n > 0) {
    return -n
  } else {
    return n
  }
  }

console.log(asNegative(4), "expected: -4")
console.log(asNegative(-21), "expected: -21")
console.log(asNegative(0), "expected: -0")