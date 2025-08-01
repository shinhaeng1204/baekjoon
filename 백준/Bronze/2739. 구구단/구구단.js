const fs=require('fs');
const input=fs.readFileSync(0,'utf-8').trim().split(/\s+/);

let a=Number(input);
for(let i=1;i<10;i++){
    let sum=a*i;
    console.log(a,"*",i,"=",sum);
}