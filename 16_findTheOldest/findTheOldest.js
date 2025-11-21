const findTheOldest = function(arr) {
  const getAge = ({yearOfBirth, yearOfDeath}) => {  
    const deathYear = yearOfDeath ? yearOfDeath : new Date().getFullYear();
    return deathYear - yearOfBirth;
  }

  return arr.sort((a,b) => {
    const ageA = getAge(a), ageB = getAge(b);
    return ageB - ageA;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
