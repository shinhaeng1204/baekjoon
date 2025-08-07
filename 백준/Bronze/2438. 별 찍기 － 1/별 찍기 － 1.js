const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const test = Number(input[0]);

for(let i=1;i<=test;i++){
    console.log("*".repeat(i));
}