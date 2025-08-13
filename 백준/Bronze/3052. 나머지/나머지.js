const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);

let arr = new Array().map(Number)
let sum = 0;
let set = new Set()
for(let i=0;i<input.length;i++){
    arr[i] = input[i]
}

for(let i=0;i<arr.length;i++){
    set.add(arr[i]%42)
}
console.log(set.size)