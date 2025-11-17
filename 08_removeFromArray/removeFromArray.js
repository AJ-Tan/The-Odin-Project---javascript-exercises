const removeFromArray = function(arr, ...filterValue) {
  return arr.filter(val => !filterValue.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
