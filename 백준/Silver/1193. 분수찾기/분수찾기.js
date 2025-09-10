const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n").map(Number);

let num=Number(input[0])
let sum=1
let i=0
while(sum<=num){
    sum+=i
    i++
}
sum=sum-i+1
const d= i
let n
let m
if(d%2===0){
    m=1
    n=d-m
    while(sum!==num){
        n--
        m++
        sum++
    }
} else{
    n=1
    m=d-n
    while(sum!==num){
        n++
        m--
        sum++
    }
}
console.log(n+"/"+m)

