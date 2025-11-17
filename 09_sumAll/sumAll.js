const sumAll = function(min, max) {
  const isInvalid = val => {
    if(!Number.isInteger(val)) return true;
    if(val < 0) return true;
    return false;
  }

  if(isInvalid(min) || isInvalid(max)) return "ERROR";

  if(min > max) [min, max] = [max, min];

  let sum = 0;
  
  for(min; min <= max; min++) {
    sum+=min;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
