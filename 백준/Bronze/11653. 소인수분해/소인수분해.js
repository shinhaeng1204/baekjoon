const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

let num = Number(input[0])
let arr = new Array()
function find(num){
    for(let i=2;i<=num;i++){
        if(num%i===0){
            arr.push(i)
        }
    }
    return arr
}
arr = find(num)

while(num!==1){
    for(let i=0;i<arr.length;i++){
        if(num%arr[i]===0){
            num = num/arr[i]
            arr = find(num)
            console.log(arr[i])
            break
        }
    }
}