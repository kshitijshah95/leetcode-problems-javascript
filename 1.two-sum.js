/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let cache = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!cache.has(target - nums[i])) {
      cache.set(nums[i], i);
    } else {
      return [cache.get(target - nums[i]), i];
    }
  }

  return [];
};
// @lc code=end
