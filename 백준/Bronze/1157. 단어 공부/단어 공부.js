const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

const str = String(input).toLowerCase().split("")
let set = new Set(str)
let arr = Array.from(set)
let prev=0
let current=0
let answer = new String()
for(let i=0;i<arr.length;i++){
   str.forEach((e) => {
    if(e===arr[i]){
        current++
    }
   });
   if(prev<current){
    prev = current
    answer = arr[i]
   } else if(prev===current){
    answer="?"
   }
   current=0
}
console.log(answer.toUpperCase())