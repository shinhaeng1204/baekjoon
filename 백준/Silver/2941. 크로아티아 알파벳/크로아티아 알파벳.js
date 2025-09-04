const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

const arr=["c=", "c-", "dz=","d-","lj","nj", "s=","z="]

let s = String(input)
for(const a of arr){
    while (s.includes(a)){
        s=s.replace(a, "#")
    }
}
console.log(s.length)

