const palindromes = function (str) {
  const validCharacter = 'abcdefghijklmnopqrstuvwxyz123456789';

  const cleanString = [...str.toLowerCase()]
  .filter(val => validCharacter.includes(val))
  .join('');
  return cleanString === [...cleanString].reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
