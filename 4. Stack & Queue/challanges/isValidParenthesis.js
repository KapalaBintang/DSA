const isValidParenthesis = (str) => {
  const stack = [];

  const parenthesis = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let char of str) {
    if (parenthesis[char]) {
      stack.push(char);
    } else {
      const pop = stack.pop();

      if (!pop || parenthesis[pop] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const coba1 = isValidParenthesis("{}()[]");
const coba2 = isValidParenthesis("{}([)]");
const coba3 = isValidParenthesis("{([])}");
console.log(coba1); //true
console.log(coba2); //false
console.log(coba3); //true
