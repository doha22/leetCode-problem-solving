/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */

var removeDigit = function (number, digit) {
    max_res = "";
    for (i = 0; i < number.length; i++) {
        if (number[i] == digit) {
            console.log("number.substr(0, i)  ", number.substr(0, i));
            console.log("number.substr(i + 1) ", number.substr(i + 1));
            new_num = number.substr(0, i) + number.substr(i + 1);
            if (new_num == "" || new_num > max_res) {
                max_res = new_num;
            }
            console.log("max_res ", max_res);
        }
    }
    return max_res;
};

console.log(removeDigit("133235", "3"));

// Input: number = "123", digit = "3"
// Output: "12"
// Explanation: There is only one '3' in "123". After removing '3', the result is "12".

// Input: number = "551", digit = "5"
// Output: "51"
// Explanation: We can remove either the first or second '5' from "551".
// Both result in the string "51".
