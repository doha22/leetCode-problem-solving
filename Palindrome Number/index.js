/**
 * @param {number} x
 * @return {boolean}
 */

//Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (num) {
    var revNumber = 0;
    let input = num;
    while (num > 0) {
        revNumber = revNumber * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    if (revNumber == input) return true;
    else return false;
};

console.log(isPalindrome(121));

// Input: x = 121
// Output: true

// Input: x = -121
// Output: false
