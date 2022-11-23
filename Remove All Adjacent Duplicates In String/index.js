// You are given a  s consist  of lowercase English letters. A duplicate removal consistacks of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final s after all such duplicate removals have been made. It can be proven that the answer is unique.

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    var stack = [];
    var i = 0;
    var shortest_str = "";
    while (i < s.length) {
        if (stack.length == 0 || s[i] != stack[stack.length - 1]) {
            stack.push(s[i]);
            i++;
        } else {
            // has duplication
            stack.pop();
            i++;
        }
    }
    if (stack.length != 0) {
        // returning the stack without adjacent duplication

        while (stack.length != 0) {
            shortest_str = stack[stack.length - 1] + shortest_str;
            stack.pop();
        }
    }
    return shortest_str;
};

console.log(removeDuplicates("aabaca"));

// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

// Input: s = "azxxzy"
// Output: "ay"
