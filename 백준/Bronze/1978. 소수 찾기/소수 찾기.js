const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

let test = Number(input[0])
let num = new Array()
num = input[1].split(" ").map(Number)
let count = num.length
for(let i=0;i<test;i++){
    if(num[i]===1){
        count--
    } else if(num[i]%2 !==0){
        for(let j=3;j<num[i];j=j+2){
            if(num[i]%j!==0){
                continue
            } else{
                count--
                break
            }
        }
    } else if(num[i]===2){
        continue
    } else{
        count--
    }
}
console.log(count)