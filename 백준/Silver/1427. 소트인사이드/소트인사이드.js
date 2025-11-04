const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const n = String(input[0])
let arr = new Array()

arr = n.split("")
arr.sort((a,b)=>b-a)
console.log(arr.join(""))