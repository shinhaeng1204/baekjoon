const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [n,m] = input[0].split(" ").map(Number)
let arr = new Array()
for(let i=1;i<=n;i++){
    arr.push(input[i].split(""))
}

function calcB(f,l){
    let count=0
    let ln = l
    for(let i=0;i<8;i++){
        if(i%2===0){
            for(let j=0;j<8;j++){
                if(j%2===0){
                    if(arr[f][ln]==='W') count++
                } else{
                    if(arr[f][ln]==='B') count++  
                }
                ln++
            }
            ln=l
        } else{
            for(let j=0;j<8;j++){
                if(j%2===0){
                    if(arr[f][ln]==='B') count++
                } else{
                    if(arr[f][ln]==='W') count++  
                }
                ln++
            }
            ln=l
        }
        f++
    }
    return count
}
function calcW(f,l){
    let count=0
    let ln = l
    for(let i=0;i<8;i++){
        if(i%2===0){
            for(let j=0;j<8;j++){
                if(j%2===0){
                    if(arr[f][ln]==='B') count++
                } else{
                    if(arr[f][ln]==='W') count++  
                }
                ln++
            }
            ln = l
        } else{
            for(let j=0;j<8;j++){
                if(j%2===0){
                    if(arr[f][ln]==='W') count++
                } else{
                    if(arr[f][ln]==='B') count++  
                }
                ln++
            }
            ln = l
        }
        f++
    }
    return count
}

const detn = n-8
const detm = m-8
let count = calcB(0,0)<calcW(0,0) ? calcB(0,0) : calcW(0,0)
for(let i=0;i<=detn;i++){
    for(let j=0;j<=detm;j++){
        let countn = calcB(i,j)<calcW(i,j) ? calcB(i,j) : calcW(i,j)
        if(countn<count){
            count = countn
        }
    }
}
console.log(count)