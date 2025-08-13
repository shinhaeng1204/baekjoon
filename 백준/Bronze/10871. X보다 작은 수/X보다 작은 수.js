const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const num = Number(input[0].split(" ")[1])
const arr = input[1].split(" ").map(Number)

let newarr = new Array()

arr.forEach((item)=>{
    if(item<num){
        newarr.push(item);
    }
})
console.log(newarr.join(" "));
