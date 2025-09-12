const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const n = BigInt(input[0])

const ans = (n * (n - 1n) * (n - 2n)) / 6n; // nC3
console.log(ans.toString());
console.log(3);