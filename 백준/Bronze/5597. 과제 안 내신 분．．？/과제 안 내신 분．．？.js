const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);

let arr = new Array(30).map(Number)
let correct = new Array()
for(let i=0;i<30;i++){
    arr[i] = i+1;
}


for(let j=0;j<input.length;j++){
    arr = arr.filter(v => v !== input[j]);
}
arr.sort(function(a,b) {return a-b})
console.log(arr[0])
console.log(arr[1])