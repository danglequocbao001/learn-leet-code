/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

var containsNearbyDuplicate = function (nums, k) {
  let findDuplicates = (arr) =>
    arr.filter((item, index) => arr.indexOf(item) != index);
  let foundDuplicatesArr = [...new Set(findDuplicates(nums))];

  for (let item of foundDuplicatesArr) {
    var indices = [];
    nums.filter(function (nums, index) {
      if (nums == item) {
        indices.push(index);
      }
    });
    for (let i = 0; i < indices.length; i++) {
      for (let j = 0; j < indices.length - 1; j++) {
        if (
          indices[i] != indices[j] &&
          Math.abs(indices[i] - indices[j]) <= k
        ) {
          console.log("i: " + indices[i], "j: " + indices[j]);
          return true;
        }
      }
    }
  }
  return false;
};

var containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (i != j && Math.abs(i - j) <= k && Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
    }
  }
  return false;
};

// console.log(containsNearbyAlmostDuplicate([8, 7, 15, 1, 6, 1, 9, 15], 1, 3));

/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    var max1 = 0;
    var max2 = 0;
    for (let i = 0; i < 2; i++) {
      var max = Math.max.apply(null, stones);
      if (i == 0) {
        max1 = max;
      } else max2 = max;
      stones.splice(stones.indexOf(max), 1);
    }
    if (max1 != max2) {
      stones.push(max1 - max2);
    }
  }
  if (stones.length == 1) {
    return stones[0];
  } else return 0;
};

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var maxInt = Math.pow(2, 53);
  var maxSoFar = -maxInt - 1;
  var maxEnding = 0;

  for (var i = 0; i < nums.length; i++) {
    maxEnding = maxEnding + nums[i];
    if (maxSoFar < maxEnding) maxSoFar = maxEnding;

    if (maxEnding < 0) maxEnding = 0;
  }
  console.log(maxSoFar);
  return maxSoFar;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
