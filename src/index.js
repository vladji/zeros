module.exports = function zeros(expression) {
  const arr = expression.split('*');
  let zerosNum = {
    comparison1: 0,
    comparison2: 0,
  };

  for (let item of arr) {
    let number = parseInt(item);
    let lengths = null;
    // FACTORIAL__through-one
    if (item.endsWith('!!')) {
      if (number % 2 === 0) {
        lengths = checker(2, 2, number);
        zerosNum.comparison1 += lengths.comparison1;
        zerosNum.comparison2 += lengths.comparison2;
      } else {
        lengths = checker(1, 2, number);
        zerosNum.comparison1 += lengths.comparison1;
        zerosNum.comparison2 += lengths.comparison2;
      }
      // FACTORIAL__step-by-step
    } else {
      lengths = checker(1, 1, number);
      zerosNum.comparison1 += lengths.comparison1;
      zerosNum.comparison2 += lengths.comparison2;
    }
  }
  const result = (zerosNum.comparison1 > zerosNum.comparison2) ? zerosNum.comparison2 : zerosNum.comparison1;
  return result;
}

function checker(val, counter, number) {
  let comparison1 = '';
  let comparison2 = '';

  while (val <= number) {
    let residue2 = val % 2;
    let residue5 = val % 5;
    // looking for numbers that are divided by two
    if (residue2 === 0) {
      comparison1 = comparison1 + '.';
      let fission2 = val / 2;
      if (fission2 % 2 === 0) {
        do {
          comparison1 = comparison1 + '.';
          fission2 = fission2 / 2;
        } while (fission2 % 2 === 0);
      }
    }
    // looking for numbers that divide by five
    if (residue5 === 0) {
      comparison2 = comparison2 + '.';
      let fission5 = val / 5;
      if (fission5 % 5 === 0) {
        do {
          comparison2 = comparison2 + '.';
          fission5 = fission5 / 5;
        } while (fission5 % 5 === 0);
      }
    }
    val += counter;
  }

  const lengths = {
    comparison1: comparison1.length,
    comparison2: comparison2.length,
  };
  return lengths;
}