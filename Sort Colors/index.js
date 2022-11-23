var sortColors = function (nums) {
    var counts = nums.reduce((carry, elem) => {
        carry[elem] = (carry[elem] || 0) + 1;
        return carry;
    }, {});
    return nums.sort((a, b) => (counts[b] == counts[a] ? b - a : counts[b] - counts[a]));
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
