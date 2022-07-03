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
  return maxSoFar;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (i != j && nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i, j, k;
  for (i = m - 1, j = n - 1, k = m + n - 1; i >= 0 && j >= 0; k--) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i--];
    } else {
      nums1[k] = nums2[j--];
    }
  }
  while (i >= 0) {
    nums1[k--] = nums1[i--];
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null;
  let temp = null;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    let sum = carry;
    if (l1 != null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 != null) {
      sum += l2.val;
      l2 = l2.next;
    }
    let node = new ListNode(Math.floor(sum) % 10);
    carry = Math.floor(sum / 10);
    if (temp == null) {
      temp = head = node;
    } else {
      temp.next = node;
      temp = temp.next;
    }
  }
  if (carry > 0) {
    temp.next = new ListNode(carry);
  }
  return head;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let i,
    j,
    k,
    m = nums1.length,
    n = nums2.length;
  for (i = m - 1, j = n - 1, k = m + n - 1; i >= 0 && j >= 0; k--) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i--];
    } else {
      nums1[k] = nums2[j--];
    }
  }
  while (i >= 0) {
    nums1[k--] = nums1[i--];
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
  if (nums1.length % 2 == 0) {
    return (nums1[nums1.length / 2] + nums1[nums1.length / 2 - 1]) / 2;
  } else {
    return nums1[Math.round(nums1.length / 2) - 1];
  }
};

// console.log(findMedianSortedArrays([3], [-2, -1]));

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let number = x;
  let reverse = 0;
  while (number > 0) {
    reverse = reverse * 10 + (number % 10);
    number = parseInt(number / 10);
  }
  return x === reverse;
};

// console.log(isPalindrome(9999));

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let len = nums.length,
    i = 1;
  while (nums[i] === nums[i - 1]) i++;
  let up = nums[i - 1] > nums[i],
    ans = 1;
  for (; i < len; i++)
    if ((up && nums[i] < nums[i - 1]) || (!up && nums[i] > nums[i - 1]))
      (up = !up), ans++;
  return ans;
};

// console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]));

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let ans = 0;
  for (let i = s.length - 1; ~i; i--) {
    let num = roman[s.charAt(i)];
    if (4 * num < ans) ans -= num;
    else ans += num;
  }
  return ans;
};

// console.log(romanToInt("LVIII"));

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let size = strs.length;
  if (size == 0) return "";
  if (size == 1) return strs[0];
  strs.sort();
  let end = Math.min(strs[0].length, strs[size - 1].length);
  let i = 0;
  while (i < end && strs[0][i] == strs[size - 1][i]) i++;
  let pre = strs[0].substring(0, i);
  return pre;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length == 0) {
    return 0;
  }
  let i = 0,
    j = 0;
  for (; i < nums.length - 1; i++) {
    if (nums[i] != val) {
      nums[j++] = nums[i];
    }
  }
  if (nums[i] != val) {
    nums[j++] = nums[i];
  }
  return j;
};

// console.log(removeElement([3, 2, 2, 3], 3));


