const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const test = input[0]
let arr_1 = new Array()

for(let i=1;i<=test;i++){
    let arr_2 = new String()
    const [num, str] = input[i].split(" ")
    arr_1 = str.split("")
    for(let j=0;j<arr_1.length;j++){

        arr_2 += arr_1[j].repeat(num)
    }
    console.log(arr_2)

}
