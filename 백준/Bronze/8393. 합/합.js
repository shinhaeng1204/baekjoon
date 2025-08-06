const fs=require('fs');
const input=fs.readFileSync(0,'utf-8').trim();

const num=input;
let sum=0;
for(let i=1;i<=num;i++){
    sum += i
}
console.log(sum);
