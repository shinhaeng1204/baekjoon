const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const test = input[0]
const arr = test === "" ? [] : test.split(/\s+/)
console.log(arr.length)
