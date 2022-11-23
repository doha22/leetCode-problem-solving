/**
 * @param {number} n
 * @return {number[]}
 */
//Given an integer n, return any array containing n unique integers such that they add up to 0.
var sumZero = function (n) {
    const result = [];

    if (n === 1) return [0];
    else {
        for (i = 1; i <= n / 2; i++) {
            result.push(i, i * -1); // setting length to the array
        }
        if (n % 2 !== 0) {
            result.push(0);
        }
        return result;
    }
};

console.log(sumZero(4));

// Input: n = 5
// Output: [-7,-1,1,3,4]

// Input: n = 3
// Output: [-1,0,1]

// Input: n = 1
// Output: [0]
