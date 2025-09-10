const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n").map(Number);


const test = input[0]
for(let i=1;i<=test;i++){
   solution(input[i])
}

function solution(input){
    let quarter = Math.floor(input/25)
    let q_ = input - 25*quarter
    let dime = Math.floor(q_/10)
    let d_ = q_ - (10*dime)
    let nickel = Math.floor(d_/5)
    let n_ = d_ - 5*nickel
    let penny = Math.floor(n_/1)
    
    console.log(quarter, dime, nickel, penny)
    
}