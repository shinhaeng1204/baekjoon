const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

let arr = new Array()
let max=-1
let ans = []
for(let i=0;i<9;i++){
    arr[i] = input[i].split(" ").map(Number)
}

for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        if(max<arr[i][j]){
            max=arr[i][j]
            ans=[i+1,j+1]
        }
    }
}
console.log(max)
console.log(ans.join(" "))