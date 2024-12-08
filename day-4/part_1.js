const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString();
const lines = input.split('\n');

let xmasCount = 0;

lines.forEach((line, row) => {
    const chars = [...line];

    chars.forEach((char, column) => {
        if (char !== "X") {
            return;
        }

        // TODO: abstract directional checks

        // up
        if (row - 3 >= 0) {
            if (lines[row - 1][column] === "M"
                && lines[row - 2][column] === "A"
                && lines[row - 3][column] === "S"
            ) {
                xmasCount++;
            }
        }

        // right
        if (column + 3 < chars.length) {
            if (chars[column + 1] === "M"
                && chars[column + 2] === "A"
                && chars[column + 3] === "S"
            ) {
                xmasCount++;
            }
        }

        // down
        if (row + 3 < lines.length) {
            if (lines[row + 1][column] === "M"
                && lines[row + 2][column] === "A"
                && lines[row + 3][column] === "S"
            ) {
                xmasCount++;
            }
        }

        // left
        if (column - 3 >= 0) {
            if (chars[column - 1] === "M"
                && chars[column - 2] === "A"
                && chars[column - 3] === "S"
            ) {
                xmasCount++;
            }
        }

        // up right
        if (row - 3 >= 0 && column + 3 < chars.length) {
            if (lines[row - 1][column + 1] === "M"
                && lines[row - 2][column + 2] === "A"
                && lines[row - 3][column + 3] === "S"
            ) {
                xmasCount++;
            }
        }

        // up left
        if (row - 3 >= 0 && column - 3 >= 0) {
            if (lines[row - 1][column - 1] === "M"
                && lines[row - 2][column - 2] === "A"
                && lines[row - 3][column - 3] === "S"
            ) {
                xmasCount++;
            }
        }

        // down right
        if (row + 3 < lines.length && column + 3 < chars.length) {
            if (lines[row + 1][column + 1] === "M"
                && lines[row + 2][column + 2] === "A"
                && lines[row + 3][column + 3] === "S"
            ) {
                xmasCount++;
            }
        }

        // down left
        if (row + 3 < lines.length && column - 3 >= 0) {
            if (lines[row + 1][column - 1] === "M"
                && lines[row + 2][column - 2] === "A"
                && lines[row + 3][column - 3] === "S"
            ) {
                xmasCount++;
            }
        }
    });
});

console.log(xmasCount);