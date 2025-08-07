const fs=require('fs');
const input=fs.readFileSync(0,'utf-8').trim();


const num=Number(input);
let str="";

for(let i=0;i<(num/4);i++){
    str += "long "
}
str += "int";
console.log(str);
