const repeatString = function(str, num) {
  let output = num >= 0 ? '' : 'ERROR';
  while(num > 0) {
    output += str;
    num--;
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
