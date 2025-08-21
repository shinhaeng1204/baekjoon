const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const string = input[0]
const num = input[1]

const array = string.split("")
console.log(array[num-1])

