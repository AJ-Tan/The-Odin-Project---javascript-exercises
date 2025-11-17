const leapYears = function(paramYear) {
  if(paramYear % 4 === 0 && paramYear % 100 !== 0 
    || paramYear % 400 === 0) {
    return true;
  } else {
    return false
  }
};

// Do not edit below this line
module.exports = leapYears;
