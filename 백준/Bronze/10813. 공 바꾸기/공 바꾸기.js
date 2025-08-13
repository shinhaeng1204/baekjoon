const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [N, M] = input[0].split(/\s+/).map(Number);  // N: 바구니 수, M: 연산 수
let baskets = new Array(N)

for (let i = 0; i < N; i++) {
  baskets[i] = i + 1;
}
for(let i=1;i<=M;i++){
    const [j, k] = input[i].split(/\s+/).map(Number);
    let temp = baskets[j-1]
    baskets[j-1] = baskets[k-1]
    baskets[k-1] = temp
}
console.log(baskets.join(" "))