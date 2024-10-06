// const twoPointers = (target, arr) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let total = arr[left] + arr[right];

//   while (left < right) {
//     if (total === target) {
//       return [left, right];
//     } else if (total < target) {
//       left++;
//     } else if (total > target) {
//       right--;
//     }
//     total = arr[left] + arr[right];
//   }

//   return [-1, -1];
// };

// console.log(twoPointers(9, [2, 7, 11, 15]));

// const twoLastInt = (num) => {
//   let splitted = num.toString().split("");
//   console.log(splitted);
//   return splitted[splitted.length - 2] + splitted[splitted.length - 1];
// };

// console.log(twoLastInt(99999999));

// findLosingNum

function findLosingNum(arrNums, N) {
  const sortedArr = arrNums.sort((a, b) => a - b);
  console.log(sortedArr);
  let result = 0;

  for (let i = 0; i < arrNums.length; i++) {
    if (sortedArr[i + 1] - sortedArr[i] != 1) {
      result = sortedArr[i] + 1;
      console.log(result);
      return result;
    }
  }
}

// complexity
// time: O(n log n)
// space: O(n)

const coba1 = findLosingNum([1, 2, 4, 3, 5, 6, 8, 9], 9);
const coba2 = findLosingNum([3, 4, 2, 6, 7], 7);

// algortima how many same letter in a sentence
// buat sebuah  funvtion yang mengambil 2 parameter. (huruf yang dicari, sentence)
// kita split sentece dan kita trim
// buat variabel count dengan nilai awal 0
// buat looping
// buat condition jika ada huruf yang sama didalam array

function countLetters(letter, sentence) {
  const splittedSentence = sentence.toLowerCase().split("");
  let count = 0;

  for (let x of splittedSentence) {
    if (x === letter) count += 1;
  }

  return count;
}

console.log(countLetters("m", "Halo namaku mangga dan aku suka menolong orang lain. mamaku seorang yang berasal dari Malang"));
