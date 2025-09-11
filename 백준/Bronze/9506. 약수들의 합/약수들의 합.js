const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

let num = Number(input[0])
let i=1
while(num!==-1){
    let sum=0
    let arr = []
    let sumarr = []
    for(let j=1;j<num;j++){
        if(num%j===0){
            arr.push(j)
            sum += j
        }
    }
    if(num === sum){
        sumarr.push(num, "=")
        for(let k=0;k<arr.length;k++){
            sumarr.push(arr[k], "+")
        }
        sumarr.pop("+")
        console.log(sumarr.join(" "))
    } else{
        console.log(num,"is NOT perfect.")
    }
    num = Number(input[i])
    i++
}