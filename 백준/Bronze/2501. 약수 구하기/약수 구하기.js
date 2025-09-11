const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const [x,y] = input[0].split(" ").map(Number)
let arr = new Array()
for(let i=1;i<=x;i++){
    if(x%i===0){
        arr.push(i)
    }
}
if(arr[y-1]!==undefined){
    console.log(arr[y-1])
} else{
    console.log("0")
}