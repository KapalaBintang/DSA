const reversedStr = (str) => {
  const stack = [];

  for (let word of str) {
    stack.push(word);
  }

  let reversedStr = "";

  while (stack.length > 0) {
    reversedStr += stack.pop();
    console.log(stack.length);
  }

  return reversedStr;
};

console.log(reversedStr("hello kawan"));
