const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString();
const lines = input.split('\n');

let xmasCount = 0;

lines.forEach((line, row) => {
    const chars = [...line];

    chars.forEach((char, column) => {
        if (char !== "A"
            || column + 1 >= chars.length
            || row + 1 >= lines.length
            || column - 1 < 0
            || row - 1 < 0
        ) {
            return;
        }

        const upRight = lines[row - 1][column + 1];
        const downRight = lines[row + 1][column + 1];
        const upLeft = lines[row - 1][column - 1];
        const downLeft = lines[row + 1][column - 1];

        const negativeSlopeDiagonal = [upLeft, downRight];
        const positiveSlopeDiagonal = [downLeft, upRight];
        
        if (negativeSlopeDiagonal.filter((c) => c === "M").length === 1
            && negativeSlopeDiagonal.filter((c) => c === "S").length === 1
            && positiveSlopeDiagonal.filter((c) => c === "M").length === 1
            && positiveSlopeDiagonal.filter((c) => c === "S").length === 1
        ) {
            xmasCount++;
            console.log(`${char}, upRight: ${upRight}, downRight: ${downRight}, upLeft: ${upLeft}, downLeft: ${downLeft}`);
        }
    });
});

console.log(xmasCount);
