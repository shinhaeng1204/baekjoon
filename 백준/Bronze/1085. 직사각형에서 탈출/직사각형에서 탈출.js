const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const [x,y,w,h] = input[0].split(" ").map(Number)
let n = w-x
let m = h-y
if(x<n){
    n=x
}
if(y<m){
    m=y
}
if(m<n){
    console.log(m)
} else{
    console.log(n)
}