const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const num = input[0]

for(let i=1;i<=num;i++){
    let array = input[i]
    let answerarray = new Array()
    answerarray.push(array[0])
    answerarray.push(array[array.length-1])
    console.log(answerarray.join(""))
}
