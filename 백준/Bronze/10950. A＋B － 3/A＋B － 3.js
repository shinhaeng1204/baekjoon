const fs=require('fs');
const input=fs.readFileSync(0,'utf-8').trim().split(/\n/);

const test=input[0];
let num1;
let num2;
for(let i=1;i<(Number(test)+1);i++){

    const [num1, num2] = input[i].split(" ").map(Number);
    console.log(num1+num2);
}