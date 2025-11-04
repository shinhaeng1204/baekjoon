const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let arr = new Array()
let sum=0
for(let i=0;i<5;i++){
    arr.push(input[i])
    sum += Number(input[i])
}

let average = sum/5
arr.sort((a,b)=>a-b)
let middle = arr[2]
console.log(average)
console.log(middle)