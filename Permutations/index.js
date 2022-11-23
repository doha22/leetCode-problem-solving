/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//  Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

function perm(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i = i + 1) {
        let concatend_arr = perm(nums.slice(0, i).concat(nums.slice(i + 1)));

        if (!concatend_arr.length) {
            result.push([nums[i]]);
        } else {
            for (let j = 0; j < concatend_arr.length; j = j + 1) {
                result.push([nums[i]].concat(concatend_arr[j]));
            }
        }
    }
    return result;
}

console.log(perm([1, 2, 3]));

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
