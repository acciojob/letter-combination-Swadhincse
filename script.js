function letterCombinations(digits) {
  const lettersMap = {
    0: "0",
    1: "1",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };

  if (digits.length === 0) {
    return [];
  }

  const result = [""];
  
  for (let i = 0; i < digits.length; i++) {
    const currentDigit = digits[i];
    const letters = lettersMap[currentDigit];
    const len = result.length;
    for (let j = 0; j < len; j++) {
      const prevStr = result.shift();
      for (let k = 0; k < letters.length; k++) {
        const newStr = prevStr + letters[k];
        result.push(newStr);
      }
    }
  }
  
  return result.sort();
}

module.exports = letterCombinations;
