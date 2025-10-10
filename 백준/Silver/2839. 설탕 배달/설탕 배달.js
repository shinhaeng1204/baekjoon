const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const n = Number(input[0])

let det = Math.floor(n/5)
let count=0
while(det>=0){
    if((n-(5*det))%3===0){
        count = det+Math.floor((n-(5*det))/3)
        console.log(count)
        return
    } else{
        det--
    }
}
console.log(-1)