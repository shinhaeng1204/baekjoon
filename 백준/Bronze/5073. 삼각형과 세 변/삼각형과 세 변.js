const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

let i=0
let [a,b,c] = input[0].split(" ").map(Number)
while(a!==0 && b!==0 && c!==0){
    let arr = new Array()
    arr.push(a)
    arr.push(b)
    arr.push(c)
    arr.sort((a,b)=>a-b)
    if(arr[0]+arr[1]<=arr[2]){
        console.log("Invalid")
    } else if(a===b && b===c && a===c){
        console.log("Equilateral")
    } else if(a===b || b===c || a===c){
        console.log("Isosceles")
    } else if(a!==b && b!==c && a!==c){
        console.log("Scalene")
    }
    i++
    [a,b,c] = input[i].split(" ").map(Number)
}