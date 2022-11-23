// You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters.

// Return the maximum possible length of s.

// need to get all subset of string(  all possible subsets of the input array  )
// then concatonate substings
// check for uniques of each string
// get the max length of new string

// check for  the uniques string
function checkUniqueString(str) {
    return new Set(str).size == str.length;
}

// Function to generate all possible strings from the given array
function helper(arr, index) {
    let finderArr = [];
    finderArr.push("");

    // Base case
    if (index == arr.length) return finderArr;

    // Consider every string as a starting substring and
    // store the generated string
    let temp = helper(arr, index + 1); //
    console.log("tem = ", temp);
    let newTemporary = temp;

    // concatonate current string with  strings and check if characters are unique or not
    for (let i = 0; i < temp.length; i++) {
        let concatonated_str = temp[i] + arr[index];

        if (checkUniqueString(concatonated_str)) newTemporary.push(concatonated_str);
    }
    return newTemporary;
}

// the maximum possible length of a string
var maxLength3 = function (arr) {
    let temp = helper(arr, 0);
    console.log(typeof temp);

    let len = 0;

    // Return max length possible
    for (let i = 0; i < temp.length; i++) {
        len = len > temp[i].length ? len : temp[i].length;
    }
    // Return the answer
    console.log("len = ", len);
    return len;
};

console.log(maxLength3(["cha", "r", "act", "ers"]));

//Input: arr = ["un","iq","ue"]
// output: 4

//Input: arr = ["cha","r","act","ers"]
// output: 6

//Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
// output: 26
