const fs = require('fs');

const readFile = (filepath) => {
    try {
        const data = fs.readFileSync(filepath);
        return data.toString();
      } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
      }
};

// const instructionRegex = /mul\(\d{1,3},\d{1,3}\)/g;

const inputString = readFile('./test_2.txt');


// const instructionMatch = inputString.match(instructionRegex);

// let sum = 0;

// instructionMatch.map((match) => {
//     const factorRegex = /mul\((\d+),(\d+)\)/;

//     const factorMatch = match.match(factorRegex);

//     sum += factorMatch[1] * factorMatch[2];
// });

const regex = /do\(\)|don't\(\)/;

const splitString = inputString.split(regex);

console.log("splitString", splitString)