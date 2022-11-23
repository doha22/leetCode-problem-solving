// Given an array of intervals where intervals[i] = [starti, endi],
//merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    // sort intervals
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];
    for (let interval of intervals) {
        let end1 = res[res.length - 1][1]; // end of first interval
        let start2 = interval[0]; // start of second interval
        let end2 = interval[1];
        if (end1 >= start2) {
            // means overlapping
            res[res.length - 1][1] = Math.max(end1, end2); // get the max of 2 ends of intervals into first index of array
        } else {
            res.push(interval);
        }
    }
    return res;
    // merge them
    // using linked list as  For each interval we check if we have intersection with the previous one
    // if itersection found , merge them
};

console.log(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ])
);
