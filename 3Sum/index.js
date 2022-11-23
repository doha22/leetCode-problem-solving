//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

var threeSum = function (nums) {
    let left = 0; // pointer
    let right = nums.length - 1; // pointer
    let result = [];
    nums.sort((a, b) => a - b); // sort the list

    for (i = 0; i < nums.length; i++) {
        // check the duplicates in i
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        left = i + 1;
        right = nums.length - 1;
        let sum = 0;
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                left++; // update the pointers
                right--;

                //check for duplicate
                while (left < right && nums[left] === nums[left - 1]) left++; // here if current left === old left & do same with right
                while (left < right && nums[right] === nums[right + 1]) right++;
            } else if (sum > 0) {
                right--;
            } else left++;
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

//console.log(threeSum([-1, 0, 1, 2, -1, -4]));
//Input: nums = [-1,0,1,2,-1,-4]
//Output: [[-1,-1,2],[-1,0,1]]

// Input: nums = [0,1,1]
// Output: []

//Input: nums = [0,0,0]
//Output: [[0,0,0]]
