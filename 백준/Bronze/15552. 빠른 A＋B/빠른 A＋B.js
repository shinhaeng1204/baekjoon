const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const test = Number(input[0]);

let output = []; // 출력 저장용

for (let i = 1; i <= test; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  output.push(a + b);
}

console.log(output.join('\n'));