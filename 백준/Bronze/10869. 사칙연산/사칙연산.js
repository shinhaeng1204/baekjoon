const [a, b] = require('fs')
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\s+/)
  .map(Number);

console.log(a + b);
console.log(a - b);
console.log(a * b);

// ❌ 이렇게 쓰면 7/3 === 2.3333333333333335
// console.log(a / b);

// ✅ 정수 몫만 뽑으려면 Math.floor 혹은 Math.trunc 사용
console.log(Math.floor(a / b));   // 7/3 → 2
// 또는: console.log(Math.trunc(a / b));

console.log(a % b);