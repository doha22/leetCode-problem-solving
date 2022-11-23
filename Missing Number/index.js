/**
 * @param {number[]} nums
 * @return {number}
 */

function generated_numbers_between(arr) {
    generated_numbers = [];
    start = arr[0];
    for (i = start; i < arr.length + 1; i++) {
        generated_numbers.push(i);
    }
    return generated_numbers;
}

var missingNumber = function (nums) {
    nums.sort();
    // generate numbers between start and end of array
    generated_numbers = generated_numbers_between(nums);
    // get the  difference number between 2 arrays
    let difference = generated_numbers.filter((x) => !nums.includes(x));
    if (difference.length == 0) return [0];
    return difference;
};

console.log(missingNumber([0, 1]));
