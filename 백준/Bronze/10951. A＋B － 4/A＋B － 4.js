const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let sum=0;

for(let i=0;i<input.length;i++){
    [num1, num2] = input[i].split(" ").map(Number);
    sum = num1+num2;
    console.log(sum);
}

