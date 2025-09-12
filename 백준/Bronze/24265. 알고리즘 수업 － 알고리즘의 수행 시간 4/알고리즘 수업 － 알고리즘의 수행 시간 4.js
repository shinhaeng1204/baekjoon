const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const num = Number(input[0])
let sum=0
for(let i=0;i<num;i++){
    sum +=i
}
console.log(sum)
console.log("2")