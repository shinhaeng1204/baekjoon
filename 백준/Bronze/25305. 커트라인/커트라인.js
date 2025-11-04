const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [n,k] = input[0].split(" ")
let arr = new Array()
arr = input[1].split(" ").map(Number)
arr.sort((a,b)=>b-a)
console.log(arr[k-1])


