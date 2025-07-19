const s = require('fs')
  .readFileSync('/dev/stdin', 'utf-8')  // ← '/' 빼먹으면 ENOENT 오류
  .trim()
  .split(/\s+/)

console.log(s+'??!');