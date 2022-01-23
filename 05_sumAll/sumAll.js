const sumAll = function (firstNum, secondNum) {
  if (!isValid(firstNum, secondNum)) return 'ERROR';

  const [startNum, endNum] = sortTwoNumbers(firstNum, secondNum);

  let sum = 0;

  for (let i = startNum; i <= endNum; i++) {
    sum = sum + i;
  }
  return sum;
};

function sortTwoNumbers(firstNum, secondNum) {
  return secondNum < firstNum ? [secondNum, firstNum] : [firstNum, secondNum];
}

function isValid(firstNum, secondNum) {
  if (
    typeof firstNum !== 'number' ||
    typeof secondNum !== 'number' ||
    firstNum < 0 ||
    secondNum < 0
  ) {
    return false;
  }
  return true;
}

// Do not edit below this line
module.exports = sumAll;
