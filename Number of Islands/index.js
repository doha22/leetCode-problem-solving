// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// 1 represents land & 0 represents water

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let countIsland = 0;
    for (let rowIndex in grid) {
        for (let colIndex in grid[rowIndex]) {
            if (grid[rowIndex][colIndex] === "1") {
                countIsland++;

                // should use teraform here
            }
        }
    }

    return countIsland;
};

// convert stuff around us of water
const teraform = (rowIn, colIn, grid) => {};
