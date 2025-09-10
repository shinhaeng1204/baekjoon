const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n").map(Number);


const num = Number(input[0])
const arr = new Array()
arr[0]=2
for(let i=1;i<=num;i++){
    arr[i] = arr[i-1]+(arr[i-1]-1)
}
console.log(arr[num]*arr[num])