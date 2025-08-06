const fs=require('fs');
const input=fs.readFileSync(0,'utf-8').trim().split("\n");


const total = Number(input[0]);
const test = input[1];
let price;
let num;
let sum=0;

for(let i=2;i<Number(test)+2;i++){
    [price, num] = input[i].split(" ").map(Number);
    sum += price*num;
}
if(sum===total){
    console.log("Yes");
} else{
    console.log("No");
}