const palindromes = function (str) {
  let regex = /[\W_]/g;
  let lowerRegStr = str.toLowerCase().replace(regex, '');
  let reverseStr = lowerRegStr.split('').reverse().join('');
  return lowerRegStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
