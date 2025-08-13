const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const num = Number(input[0])

let arr = new Array()

for(let i=0;i<num;i++){
    arr = input[1].split(" ").map(Number)
}

let maxnum = Math.max(...arr)
arr.forEach((item, index)=>{
    arr[index] = (item/maxnum)*100
})

let sum=0;
for(let i=0;i<num;i++){
    sum += arr[i]
}


console.log((sum/num).toFixed(3))