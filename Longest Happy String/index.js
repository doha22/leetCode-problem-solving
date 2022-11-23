var longestDiverseString = function (a, b, c) {
    let arr = [
        ["a", a, 0],
        ["b", b, 0],
        ["c", c, 0],
    ];
    arr.sort((a, b) => b[1] - a[1]);
    console.log(arr);

    let res = "";
    let last = "";
    let count = a + b + c;

    while (res.length < count) {
        let i = 0;
        // 1. the first part makes sure to clear repeating times if other letters happend in between
        // i need to smaller than 3 because there only contains 3 letters a, b, c
        while (i < 3) {
            // if last letter is not current letter, that means something in between and we
            // should clear the continuing count
            console.log("arr[i][0] " + arr[i][0]);
            console.log("last = " + last);
            console.log("arr[i][2] " + arr[i][2]);
            if (last !== arr[i][0]) {
                arr[i][2] = 0;
            }
            i++;
        }
        console.log("arr ===== ", arr);
        //2. The second part append letter in res if not over 2 letters
        let j = 0;
        // if current letter is already repeat two times, move to next letter
        while (j < 3 && arr[j][2] === 2) {
            console.log("arr[j][2] " + arr[j][2]);
            j++;
        }
        // if still have remaining for that letter
        console.log("arr[j] " + arr[j] + " arr[j][1] " + arr[j][1]);
        if (arr[j] && arr[j][1] > 0) {
            res += arr[j][0];
            last = arr[j][0];
            arr[j][1]--;
            arr[j][2]++;
            console.log("arr before sort " + arr);
            arr.sort((a, b) => b[1] - a[1]);
            console.log("arr after sorting " + arr);
        } else {
            return res;
        }
    }
    return res;
};

console.log(longestDiverseString(1, 1, 7));
