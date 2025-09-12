const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [a1, a0] = input[0].split(' ').map(Number);
const c = Number(input[1]);
const n0 = Number(input[2]);

const ok = (a1 <= c) && (a1 * n0 + a0 <= c * n0);
console.log(ok ? 1 : 0);