const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);

const maxnum = Math.max(...input)
const indexof = input.indexOf(maxnum)+1

console.log(maxnum)
console.log(indexof)