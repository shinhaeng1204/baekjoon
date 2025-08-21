const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const num = input[0]
const string = input[1]
const array = string.split("").map(Number)
let sum=0;
for(let i=0;i<num;i++){
    sum+= array[i]
}

console.log(sum)
