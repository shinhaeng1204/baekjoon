const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const n = Number(input[0])
let arr = new Array()
for(let i=1;i<=n;i++){
    arr.push(input[i])
}
arr.sort((a,b)=>a-b)
console.log(arr.join("\n"))