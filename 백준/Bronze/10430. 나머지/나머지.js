const [a, b, c]=require('fs')
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\s+/)
  .map(Number);
console.log((a+b)%c);
console.log(((a%c) + (b%c))%c);
console.log((a*b) %c);
console.log(((a%c) * (b%c))%c);