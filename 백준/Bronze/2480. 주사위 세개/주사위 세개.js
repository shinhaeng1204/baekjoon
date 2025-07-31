const fs=require('fs');
const input=fs.readFileSync(0, 'utf-8').trim().split(/\s+/)

let a=Number(input[0]);
let b=Number(input[1]);
let c=Number(input[2]);
let sum;
if(a==b && b==c){
    sum=10000+(a*1000);
} else if(a==b || a==c){
    sum=1000+(a*100);
} else if(b==c){
    sum=1000+(b*100);
} else{
    sum=Math.max(a, b, c)*100;
}
console.log(sum);



