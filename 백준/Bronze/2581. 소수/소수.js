const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const m = Number(input[0])
const n = Number(input[1])
let arr = new Array()
for(let i=0;i<n-m+1;i++){
    let count=0
    if((m+i)===1){
        continue
    } else if((m+i)===2 || (m+i)===3){
        arr.push(m+i)
    } else if((m+i)%2!==0){
        for(let j=3;j<m+i;j=j+2){

            if((m+i)%j===0){
                count=1
                break
            }
        }
        if(count===0){
            arr.push(m+i)
        }
    }
}
let sum=0
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
if(arr.length===0){
    console.log("-1")
} else{
    console.log(sum)
    console.log(arr[0])
}
