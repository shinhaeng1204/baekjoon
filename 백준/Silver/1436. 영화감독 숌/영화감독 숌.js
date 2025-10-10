const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const n = Number(input[0])

let x= 665
let count=0
while(true){
    x++
    if(String(x).includes('666')){
        count++
        if(count===n){
            console.log(x)
            break
        }
    }
}