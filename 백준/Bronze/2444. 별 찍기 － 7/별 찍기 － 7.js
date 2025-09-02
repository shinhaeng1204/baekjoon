const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number);

const test = input
for(let i=1;i<=test;i++){
    console.log(" ".repeat(test-i) + "*".repeat(i*2-1))
}
for(let j=test-1;j>0;j--){
    console.log(" ".repeat(test-j) + "*".repeat(j*2-1))
}