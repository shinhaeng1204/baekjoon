const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const [a,b,c] = input[0].split(" ").map(Number)
let arr = new Array()
arr.push(a)
arr.push(b)
arr.push(c)
arr.sort((a,b)=>a-b)
if(arr[0]+arr[1]<=arr[2]){
    while(arr[0]+arr[1]<=arr[2]){
        arr[2] = arr[2]-1
    }
}
console.log(arr[0]+arr[1]+arr[2])