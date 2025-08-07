const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const test = Number(input[0]);

for(let i=1;i<test+1;i++){
    const [num1, num2] = input[i].split(" ").map(Number);
    let sum=num1+num2;
    console.log(`Case #${i}: ${sum}`)
}