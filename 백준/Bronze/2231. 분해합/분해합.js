const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const num = Number(input[0])

let i=0
while(i<num){
    i++
    let sum=0
    let arr = new Array()
    arr = String(i).split("")
    sum = arr.reduce((acc, cur)=>Number(acc)+Number(cur), 0)
    sum +=i
    if(sum===num){
        console.log(i)
        return
    }
}
console.log(0)
