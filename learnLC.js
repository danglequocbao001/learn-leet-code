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
  let findDuplicates = (ratings) =>
    ratings.filter((item, index) => ratings.indexOf(item) != index);
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

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let num of nums) {
    if (num == 0) {
      nums.splice(nums.indexOf(num), 1);
      nums.push(0);
    }
  }
  return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let n = ratings.length;
  let sum = 0;
  let ans = new Array(n);
  if (n == 1) {
    return 1;
  }
  for (let i = 0; i < n; i++) ans[i] = 1;
  for (let i = 0; i < n - 1; i++) {
    if (ratings[i + 1] > ratings[i]) {
      ans[i + 1] = ans[i] + 1;
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && ans[i] <= ans[i + 1]) {
      ans[i] = ans[i + 1] + 1;
    }
    sum += ans[i];
  }
  sum += ans[n - 1];
  return sum;
};

// console.log(candy([1, 2, 2]));

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let globalProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];
      if (currentProfit > globalProfit) {
        globalProfit = currentProfit;
      }
    }
  }
  return globalProfit;
}

// console.log(maxProfit([3, 3]));

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const leftSymbols = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      leftSymbols.push(s[i]);
    } else if (
      s[i] === ")" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "("
    ) {
      leftSymbols.pop();
    } else if (
      s[i] === "}" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "{"
    ) {
      leftSymbols.pop();
    } else if (
      s[i] === "]" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "["
    ) {
      leftSymbols.pop();
    } else {
      return false;
    }
  }
  return leftSymbols.length === 0;
};

// console.log(isValid("(([]){)}"));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.length == 0) {
    return 0;
  } else if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    nums.push(target);
    nums.sort(function (a, b) {
      return a - b;
    });
    return nums.indexOf(target);
  }
};

// console.log(searchInsert([1, 3, 5, 6], 7));

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let left = 1,
      right = n;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let start = 1,
    end = n;
  while (start <= end) {
    let pick = start + (end - start) / 2;
    if (guess(pick) == 0) return pick;
    else if (guess(pick) == 1) start = pick + 1;
    else end = pick - 1;
  }
  return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      count++;
      len = count;
    } else {
      count = 0;
      if (len < count) {
        len = count;
      }
    }
  }
  return len;
};

// console.log(lengthOfLastWord("   fly me   to   the moon  "));

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let num = 0;
  for (let i = 0; i < digits.length; i++) {
    num += digits[i] * Math.pow(10, digits.length - i - 1);
  }
  num += 1;
  return ("" + num).split("");
};

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  let one = 1;
  let two = 0;
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = one + two;
    two = one;
    one = result;
  }
  return result;
};

// console.log(climbStairs(45));

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length == 0) {
    return 0;
  }
  let ans = 0,
    count = 0;
  nums.sort(function (a, b) {
    return a - b;
  });

  var v = [];
  v.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) v.push(nums[i]);
  }
  for (let i = 0; i < v.length; i++) {
    if (i > 0 && v[i] == v[i - 1] + 1) count++;
    else count = 1;
    ans = Math.max(ans, count);
  }
  return ans;
};

// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let ans = [];
  for (let num of nums) {
    ans.push(Math.pow(num, 2));
  }
  ans.sort(function (a, b) {
    return a - b;
  });
  return ans;
};

// console.log(sortedSquares([-4, -1, 0, 3, 10]));

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (S, T) {
  ans = "";
  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < T.length; j++) {
      if (T[j] == S[i]) {
        ans += S[i];
        // marking the character/element in
        // string s as selected
        T[j] = "A";
      }
    }
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] != "A") {
      ans += T[i];
    }
  }
  return ans;
};

// console.log(customSortString("cbafg", "abcd"));

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  countA = 0;
  continuosL = 0;
  charA = "A";
  charL = "L";
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == charA) {
      countA++;
      continuosL = 0;
    } else if (s.charAt(i) == charL) {
      continuosL++;
    } else {
      continuosL = 0;
    }
    if (countA > 1 || continuosL > 2) {
      return false;
    }
  }
  return true;
};

// console.log(checkRecord("PPALLP"));

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const networkDelayTime = function (times, n, k) {
  const distance = new Array(n).fill(Infinity).reduce((acc, v, index) => {
    acc[index + 1] = Infinity;
    return acc;
  }, {});
  distance[k] = 0;

  const adj = times.reduce((acc, [u, v, w]) => {
    acc[u] = acc[u] || [];
    acc[u].push([v, w]);
    return acc;
  }, {});
  let count = n;
  let max = 0;
  while (count > 0) {
    const [minNode, minWeight] = Object.keys(distance).reduce(
      (acc, node) => {
        const w = distance[node];
        if (w < acc[1]) {
          return [node, w];
        }
        return acc;
      },
      [0, Infinity]
    );
    if (minWeight === Infinity) {
      return -1;
    }
    max = Math.max(max, distance[minNode]);
    (adj[minNode] || []).forEach(([nextNode, nextWeight]) => {
      distance[nextNode] = Math.min(
        distance[nextNode],
        distance[minNode] + nextWeight
      );
    });
    delete distance[minNode];
    count -= 1;
  }
  return max;
};

// console.log(
//   networkDelayTime(
//     [
//       [2, 1, 1],
//       [2, 3, 1],
//       [3, 4, 1],
//     ],
//     4,
//     2
//   )
// );

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n; // base condition
  return fib(n - 2) + fib(n - 1); // recursion
};

// console.log(fib(2));

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

var isInterleave = function (s1, s2, s3) {
  let n = s1.length + 2,
    m = s2.length + 2;
  if (n + m - 4 !== s3.length) return false;
  let dp = new Uint8Array(m);
  dp[1] = 1;
  for (let i = 1; i < n; i++)
    for (let j = 1; j < m; j++) {
      let up = dp[j] && s1[i - 2] === s3[j + i - 3],
        left = dp[j - 1] && s2[j - 2] === s3[j + i - 3];
      dp[j] = up || left;
    }
  return dp[m - 1];
};

// console.log(isInterleave("", "", "a"));

/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */

var minCost = function (houses, cost, m, n, target) {
  const MAX_COST = Infinity;
  const memo = [...Array(m)].map(() =>
    [...Array(target + 1)].map(() => Array(n).fill(MAX_COST))
  );
  for (let color = 1; color <= n; color++) {
    if (houses[0] === color) {
      memo[0][1][color - 1] = 0;
    } else if (houses[0] === 0) {
      memo[0][1][color - 1] = cost[0][color - 1];
    }
  }

  for (let house = 1; house < m; house++) {
    for (
      let neighborhoods = 1;
      neighborhoods <= Math.min(target, house + 1);
      neighborhoods++
    ) {
      for (let color = 1; color <= n; color++) {
        if (houses[house] != 0 && color != houses[house]) {
          continue;
        }
        let currCost = MAX_COST;
        for (let prevColor = 1; prevColor <= n; prevColor++) {
          if (prevColor != color) {
            currCost = Math.min(
              currCost,
              memo[house - 1][neighborhoods - 1][prevColor - 1]
            );
          } else {
            currCost = Math.min(
              currCost,
              memo[house - 1][neighborhoods][color - 1]
            );
          }
        }
        let costToPaint = houses[house] != 0 ? 0 : cost[house][color - 1];
        memo[house][neighborhoods][color - 1] = currCost + costToPaint;
      }
    }
  }
  let minCost = MAX_COST;
  for (let color = 1; color <= n; color++) {
    minCost = Math.min(minCost, memo[m - 1][target][color - 1]);
  }
  return minCost == MAX_COST ? -1 : minCost;
};

// console.log(
//   minCost(
//     [0, 0, 0, 0, 0],
//     [
//       [1, 10],
//       [10, 1],
//       [10, 1],
//       [1, 10],
//       [5, 1],
//     ],
//     5,
//     2,
//     3
//   )
// );

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  let n = nums.length,
    deq = [n - 1];
  for (let i = n - 2; ~i; i--) {
    if (deq[0] - i > k) deq.shift();
    nums[i] += nums[deq[0]];
    while (deq.length && nums[deq[deq.length - 1]] <= nums[i]) deq.pop();
    deq.push(i);
  }
  return nums[0];
};

console.log(maxResult([1, -1, -2, 4, -7, 3], 2));
