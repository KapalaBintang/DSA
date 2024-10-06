// create a function, which takes an array of numbers and a target number
// initialize map as an empty object (hashmap)
// loop through the array
// initialize complement variabel as the difference between the target number and the current number
// check if the complement is in the map
// if the complement is in the map, return the index of the current number and the index of the complement
// if the complement is not in the map, add the current number to the map
// otherwise, return an empty array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in map) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return null;
};

console.log(twoSum([2, 7, 7, 8], 9));
