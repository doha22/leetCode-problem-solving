//Given an array, rotate the array to the right by k steps, where k is non-negative

//  solution 1  : A "brute force" approach using .pop() and .unshift() array methods.
// runTime complixity :  O(n * k) , spaceTime complixity : o(1)

var rotate1 = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }

    return nums;
};

var rotate2 = function (nums, k) {
    //  solution 2  : A more complex solution using array reversals
    //   1- reverse Array
    //   2- iterate through reversed array till stop on index k+1
    //   3- reverse every elemnts on the right side
    //   4- revesr the left hande side to be beside the array in step 3

    // helper function
    const reverseNum = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // reverse
            start++;
            end--;
        }
    };

    k = k % nums.length; // circular rotate
    nums.reverse();

    reverseNum(nums, 0, k - 1); // rotate from right to k-1
    reverseNum(nums, k, nums.length - 1); // rotate from k to the end
};
