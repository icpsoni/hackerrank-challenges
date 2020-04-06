'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// ::::::::::: SOLUTION :::::::::::::: //
// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
  // Declaring the array and initialsing with 0
  let found = new Array(queries.length).fill(0);
  //Checking the Occurrences
  for(let i = 0; i < queries.length; i++)
  {
    for(let j = 0; j < strings.length; j++){
      //If occurrence found increasing the count
      if(strings[j] == queries[i])
        found[i]++;
    }
  }
  return found;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const stringsCount = parseInt(readLine(), 10);

  let strings = [];

  for (let i = 0; i < stringsCount; i++) {
    const stringsItem = readLine();
    strings.push(stringsItem);
  }

  const queriesCount = parseInt(readLine(), 10);

  let queries = [];

  for (let i = 0; i < queriesCount; i++) {
    const queriesItem = readLine();
    queries.push(queriesItem);
  }

  let res = matchingStrings(strings, queries);

  ws.write(res.join("\n") + "\n");

  ws.end();
}
