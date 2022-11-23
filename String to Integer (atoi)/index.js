function containsNumbers(str) {
    return /[0-9]/.test(str);
}

var myAtoi = function (s) {
    const new_s = s.replace(/\s/g, ""); // string
    if (parseInt(new_s)) {
        // only integers
        return parseInt(new_s);
    }
    if (containsNumbers(new_s) == true) {
        const replaced = new_s.replace(/\D/g, "");
        if (replaced !== "") {
            return parseInt(replaced);
        }
    }
};
// "42"
// "   -42"
// "4193 with words"
// "words and 987"
console.log(myAtoi("words and 987"));
