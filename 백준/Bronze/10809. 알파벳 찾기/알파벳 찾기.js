const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const string = input[0]
let array = string.split("")
let answer = new Array()
for(let j=97;j<=122;j++){
    answer.push(array.indexOf(String.fromCharCode(j)))
}
console.log(answer.join(" "))