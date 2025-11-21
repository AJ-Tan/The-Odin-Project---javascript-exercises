const fibonacci = function(fibNumber) {
  if(+fibNumber < 0) return 'OOPS';
  if(+fibNumber === 0) return 0;
  if(+fibNumber <= 2) return 1;

  let [prevValue, currentValue] = [1, 1];
  for(let i = 2; i < fibNumber; i++) {
    [prevValue, currentValue] = [currentValue, prevValue + currentValue];
  }
  return currentValue;
};

// Do not edit below this line
module.exports = fibonacci;
