const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

const test=input[0]
let count=test;
let arr = new Array()
for(let i=1;i<=test;i++){
    let str = input[i].split("")
    arr.push(str[0])
    for(let j=0;j<str.length-1;j++){
        if(str[j]===str[j+1]){
            continue
        } else{
            if(arr.includes(str[j+1])){
                count--;
                break
            } else{
                arr.push(str[j+1])
            }
        }
    }
    arr = []
}
console.log(count)
