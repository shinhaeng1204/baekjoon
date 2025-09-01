const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

let num1 = String(input[0])
let num2 = String(input[1])

num1 = Number(num1.split("").reverse().join(""))
num2 = Number(num2.split("").reverse().join(""))
if(num1>num2){
    console.log(num1)
} else{
    console.log(num2)
}
