const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const arr = input[1].split(" ").map(Number)

arr.sort(function (a,b) {return a-b;})

let newarr = new Array()
newarr.push(arr[0], arr[arr.length-1])
console.log(newarr.join(" "));