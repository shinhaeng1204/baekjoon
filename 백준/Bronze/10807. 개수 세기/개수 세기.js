const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const test = input[0];
const arr = input[1].split(" ").map(Number)
const num = Number(input[2]);

let sum=0;


arr.forEach((item)=> {
    if(item === num){    
        sum++;
    }
});
console.log(sum);