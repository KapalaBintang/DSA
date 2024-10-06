// // roma to int
// var romanToInt = function (s) {
//   const sym = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;

//   for (let i = 0; i < s.length; i++) {
//     const cur = sym[s[i]];
//     const next = sym[s[i + 1]];

//     if (cur < next) {
//       result += next - cur;
//       i++;
//     } else {
//       result += cur;
//     }
//   }

//   return result;
// };

// is number palindrome
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reversedNum = x
    .toString()
    .split("")
    .reverse()
    .map((num) => parseInt(num))
    .join("");

  console.log(typeof reversedNum);

  return parseInt(reversedNum) === x ? true : false;
};

console.log(isPalindrome(121));
