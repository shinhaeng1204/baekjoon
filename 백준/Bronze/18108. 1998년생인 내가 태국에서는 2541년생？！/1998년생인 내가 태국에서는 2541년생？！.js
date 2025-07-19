const [a]=require('fs')
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\s+/)
  .map(Number);
console.log(a-543);