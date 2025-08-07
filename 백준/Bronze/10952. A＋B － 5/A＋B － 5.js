const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let [num1,num2] = input[0].split(" ").map(Number);
//console.log(num1, num2);
let i=0;
while(num1!=0 && num2!=0){
    [num1, num2] = input[i].split(" ").map(Number);
    let sum = num1+num2;
    i++;
    //console.log(num1, num2);
    if(sum==0){
        break;
    }
    console.log(sum);
}