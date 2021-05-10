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

  for (let el of nums) {
    if (!cache.has(el)) {
      cache.set(el, target - el);
    } else {
      let secondNum = cache.get(el);
      if (secondNum === target - el) return [el, secondNum];
    }
  }
  return;
};
// @lc code=end
