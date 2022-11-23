/**
 * @param {number[]} nums
 * @return {number}
 */
//  Given an integer array nums, find the subarray which has the largest sum and return its sum.

// concatonate each time elements to make sub arrays
// get sum for each subarrays
// get the  max sum

var maxSubArray = function (nums) {
    let maxSum = -Infinity;
    for (i = 0; i < nums.length; i++) {
        let currSum = 0;
        for (j = i; j < nums.length; j++) {
            currSum += nums[j];
            maxSum = Math.max(maxSum, currSum);
        }
    }
    return maxSum;
};

///////////////////////////////////////////////////
var maxSubArray2 = function (nums) {
    var prev = 0;
    var max = -Infinity;

    for (var i = 0; i < nums.length; i++) {
        // Compare previous contiguous sum with current number
        prev = Math.max(prev + nums[i], nums[i]);
        // Check if the current prev is the greatest sum
        max = Math.max(max, prev);
    }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Input: nums = [1]
// Output: 1

// Input: nums = [5,4,-1,7,8]
// Output: 23
