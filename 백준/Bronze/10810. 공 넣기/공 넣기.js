const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [N, M] = input[0].split(/\s+/).map(Number);  // N: 바구니 수, M: 연산 수
const baskets = new Array(N).fill(0);

for (let t = 1; t <= M; t++) {
  const [i, j, k] = input[t].split(/\s+/).map(Number); // 구간 [i, j] 에 k 넣기
  for (let x = i; x <= j; x++) {
    baskets[x - 1] = k; 
  }
}

console.log(baskets.join(' '));