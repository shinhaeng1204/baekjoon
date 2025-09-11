const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

let [x,y] = input[0].split(" ").map(Number)
let i=1
while(x!==0 && y!==0){
    if(x % y === 0){
        console.log("multiple")
    } else if(y%x===0){
        console.log("factor")
    } else{
        console.log("neither")
    }
    [x,y] = input[i].split(" ").map(Number)
    i++
}