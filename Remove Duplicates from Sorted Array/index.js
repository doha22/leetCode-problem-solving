var removeDuplicates = function (nums) {
    if (nums.length == 0) return 0;
    // let unique_Arr = [];
    count = 0;
    let i = 0; // anther pointer
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    count = i + 1;

    unique_Arr = nums.filter((v, i, a) => a.indexOf(v) === i); // get unique array

    return count;
};

console.log(removeDuplicates([1, 1, 2]));
