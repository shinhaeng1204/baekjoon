const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [n,m] = input[0].split(" ").map(Number)

let arr = input[1].split(" ")

function solution(arr,n,m){
    arr = arr.sort((a,b)=>a-b)
    arr = arr.map(num=>Number(num))
    let best = -1
    for(let i=0;i<n-2;i++){
        let j = i+1
        let k = n-1
        while(j<k){
            let s = arr[i]+arr[j]+arr[k]
            if(s>m){
                k--
            } else{
                if(s>best){
                    best=s
                } if(best===m){
                    return best
                }
                j++
            }
        }
    }
    return best
}

console.log(solution(arr,n,m))