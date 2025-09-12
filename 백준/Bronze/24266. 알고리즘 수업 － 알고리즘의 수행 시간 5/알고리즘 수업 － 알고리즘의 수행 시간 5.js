const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const num = BigInt(input[0])
const cnt = num*num*num
console.log(cnt.toString())
console.log("3")