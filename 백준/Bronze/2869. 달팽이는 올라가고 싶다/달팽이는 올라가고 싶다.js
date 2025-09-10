const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const [a,b,v] =input[0].split(" ").map(Number)
let d=0
if((v-b)%(a-b)===0){
    d = Math.floor((v-b)/(a-b))
} else{
    d = Math.floor((v-b)/(a-b))+1
}


console.log(d)