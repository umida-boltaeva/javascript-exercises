const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce(function (acc, val) {
    return acc * val;
  });
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
