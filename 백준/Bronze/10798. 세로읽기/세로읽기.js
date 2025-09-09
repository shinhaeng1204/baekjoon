const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

let arr = new Array()
let maxlength=0;
let ans=[]
for(let i=0;i<5;i++){
    arr[i] = input[i]
    if(maxlength<arr[i].length){
        maxlength=arr[i].length
    }
}
for(let j=0;j<maxlength;j++){
    for(let i=0;i<5;i++){
        if(arr[i][j]===undefined){
            continue
        } else{
            ans.push(arr[i][j])
        }
    }
}
console.log(ans.join(""))
